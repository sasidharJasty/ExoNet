import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { BASE_URL, classifyStar, fetchStarById, predictHabitability } from "../api";

const PLANET_COLORS = [
  0x6dcff6,
  0xffa07a,
  0xc8a2c8,
  0x90ee90,
  0xffd700,
  0xa9a9a9,
];

const CLASSIFIER_FEATURES = [
  "period_days",
  "transit_duration_hours",
  "depth_ppm",
  "planet_radius_re",
  "stellar_radius_rs",
  "stellar_teff_k",
  "stellar_logg",
  "snr",
  "ra",
  "dec",
  "mission_code",
  "disposition_code",
  "source_code",
];

const toFiniteNumber = (value) => {
  const num = typeof value === "number" ? value : parseFloat(value ?? "");
  return Number.isFinite(num) ? num : 0;
};

const encodeMission = (mission) => {
  const normalized = String(mission ?? "").toUpperCase();
  if (normalized.includes("KEPLER")) return 1;
  if (normalized.startsWith("K2")) return 2;
  if (normalized.includes("TESS")) return 3;
  if (normalized.includes("UNKNOWN")) return -1;
  if (normalized.includes("MISSION")) return 4;
  return 0;
};

const encodeDisposition = (disposition) => {
  const normalized = String(disposition ?? "").toLowerCase();
  if (!normalized) return 0;
  if (normalized.includes("confirmed")) return 3;
  if (normalized.includes("candidate")) return 2;
  if (normalized.includes("false") || normalized.includes("bogus")) return -1;
  if (normalized.includes("validated")) return 4;
  return 1;
};

const encodeSource = (source) => {
  const normalized = String(source ?? "").toLowerCase();
  if (normalized.includes("kepler")) return 1;
  if (normalized.includes("pscomp")) return 2;
  if (normalized.includes("toi") || normalized.includes("tess")) return 3;
  if (!normalized) return 0;
  return 4;
};

const normalizeId = (value) => (value == null ? null : String(value));

const toSafeKey = (value) => {
  if (value == null) return "star";
  return String(value).replace(/[^a-z0-9-_]/gi, "_");
};

const buildImageCandidateUrls = (explicitPath, identifier, { directory = "/static", suffix = ".png" } = {}) => {
  const urls = [];
  const seen = new Set();

  const pushUrl = (path) => {
    if (!path) return;
    const fullPath = path.startsWith("http")
      ? path
      : `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    if (!seen.has(fullPath)) {
      seen.add(fullPath);
      urls.push(fullPath);
    }
  };

  if (explicitPath) {
    pushUrl(explicitPath);
  }

  const rawId = identifier == null ? "" : String(identifier).trim();
  if (!rawId) {
    return urls;
  }

  const nameVariants = [];
  nameVariants.push(rawId);

  const safe = toSafeKey(rawId);
  if (safe && !nameVariants.includes(safe)) {
    nameVariants.push(safe);
  }

  const spaceUnderscore = rawId.replace(/\s+/g, "_");
  if (spaceUnderscore && !nameVariants.includes(spaceUnderscore)) {
    nameVariants.push(spaceUnderscore);
  }

  const spaceHyphen = rawId.replace(/\s+/g, "-");
  if (spaceHyphen && !nameVariants.includes(spaceHyphen)) {
    nameVariants.push(spaceHyphen);
  }

  const dotUnderscore = rawId.replace(/\./g, "_");
  if (dotUnderscore && !nameVariants.includes(dotUnderscore)) {
    nameVariants.push(dotUnderscore);
  }

  const slashUnderscore = rawId.replace(/[\\/]+/g, "_");
  if (slashUnderscore && !nameVariants.includes(slashUnderscore)) {
    nameVariants.push(slashUnderscore);
  }

  const lower = rawId.toLowerCase();
  if (lower && !nameVariants.includes(lower)) {
    nameVariants.push(lower);
  }

  const upper = rawId.toUpperCase();
  if (upper && !nameVariants.includes(upper)) {
    nameVariants.push(upper);
  }

  nameVariants.forEach((variant) => {
    const trimmed = String(variant).trim();
    if (!trimmed) return;
    const encoded = encodeURIComponent(trimmed);
    pushUrl(`${directory}/${encoded}${suffix}`);
  });

  return urls;
};

const useImageFallback = (candidates) => {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const key = candidates.join("|");

  useEffect(() => {
    setIndex(0);
    setHidden(false);
  }, [key]);

  const src = candidates[index] ?? null;

  const handleError = () => {
    setIndex((prev) => {
      const next = prev + 1;
      if (next < candidates.length) {
        return next;
      }
      setHidden(true);
      return prev;
    });
  };

  return {
    src,
    hidden: hidden || candidates.length === 0,
    handleError,
  };
};

const matchesStarId = (star, id) => {
  if (!star || !id) return false;
  const candidates = [
    star.target_id,
    star.id,
    star.name,
    star.kepler_id,
    star.tic_id,
  ]
    .map(normalizeId)
    .filter(Boolean);
  return candidates.some((candidate) => candidate === id);
};

const buildFeatureVector = (star) => {
  if (!star) {
    return new Array(CLASSIFIER_FEATURES.length).fill(0);
  }
  return [
    toFiniteNumber(star.period_days),
    toFiniteNumber(star.transit_duration_hours),
    toFiniteNumber(star.depth_ppm),
    toFiniteNumber(star.planet_radius_re),
    toFiniteNumber(star.stellar_radius_rs),
    toFiniteNumber(star.stellar_teff_k),
    toFiniteNumber(star.stellar_logg),
    toFiniteNumber(star.snr),
    toFiniteNumber(star.ra),
    toFiniteNumber(star.dec),
    encodeMission(star.mission),
    encodeDisposition(star.disposition ?? star.status),
    encodeSource(star.source),
  ];
};

function PlanetarySystem({ star }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !star) return undefined;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth * 0.6;
    const height = container.clientHeight || window.innerHeight * 0.6;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030511);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 500);
    camera.position.set(0, 12, 28);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = false;

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const keyLight = new THREE.PointLight(0xffffff, 1.4, 200);
    scene.add(keyLight);

    const starRadiusRaw = star.stellar_radius_rs ?? star.stellar_radius ?? 1;
    const starRadius = THREE.MathUtils.clamp(starRadiusRaw / 5 || 1.2, 0.5, 3.5);
    const starGeo = new THREE.SphereGeometry(starRadius, 64, 64);
    const starMat = new THREE.MeshStandardMaterial({
      emissive: new THREE.Color(0xfff4b5),
      emissiveIntensity: 1.5,
      color: 0xffd27f,
      metalness: 0.1,
      roughness: 0.4,
    });
    const starMesh = new THREE.Mesh(starGeo, starMat);
    scene.add(starMesh);

    const planetCountEstimate = (() => {
      const period = Math.abs(star.period_days) || 0;
      const snr = Math.abs(star.snr) || 0;
      if (period && snr) return THREE.MathUtils.clamp(Math.round((snr / 20) + Math.log10(period + 1)), 1, 6);
      if (period) return THREE.MathUtils.clamp(Math.round(Math.log10(period + 1) * 2), 1, 5);
      if (snr) return THREE.MathUtils.clamp(Math.round(snr / 15) || 1, 1, 5);
      return 3;
    })();

    const planets = [];
    const orbitGroups = [];

    for (let i = 0; i < planetCountEstimate; i += 1) {
      const orbitRadius = starRadius + 2.5 + i * 2.2;
      const size = THREE.MathUtils.clamp((star.planet_radius_re || 1) / 5, 0.3, 1.2) * (0.7 + Math.random() * 0.6);
      const color = PLANET_COLORS[i % PLANET_COLORS.length];

      const orbitGroup = new THREE.Group();
      const planetGeo = new THREE.SphereGeometry(size, 42, 42);
      const planetMat = new THREE.MeshStandardMaterial({ color, metalness: 0.2, roughness: 0.6 });
      const planetMesh = new THREE.Mesh(planetGeo, planetMat);
      planetMesh.position.x = orbitRadius;
      orbitGroup.add(planetMesh);

      const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius * (0.85 + Math.random() * 0.1));
      const orbitPoints = orbitCurve.getPoints(128).map((p) => new THREE.Vector3(p.x, 0, p.y));
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitMat = new THREE.LineBasicMaterial({ color: 0x33384b });
      const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
      orbitGroup.add(orbitLine);

      orbitGroup.rotation.x = THREE.MathUtils.degToRad(5 + Math.random() * 25);
      orbitGroup.rotation.y = Math.random() * Math.PI;

      scene.add(orbitGroup);
      orbitGroups.push({ group: orbitGroup, speed: 0.003 + i * 0.0015 });
      planets.push(planetMesh);
    }

    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < 800; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 120 + Math.random() * 80;
      const y = (Math.random() - 0.5) * 140;
      starPositions.push(
        Math.cos(angle) * distance,
        y,
        Math.sin(angle) * distance,
      );
    }
    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.6, transparent: true, opacity: 0.7 });
    const starField = new THREE.Points(starsGeometry, starMaterial);
    scene.add(starField);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      starMesh.rotation.y += 0.0015;
      orbitGroups.forEach(({ group, speed }) => {
        group.rotation.y += speed;
      });
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = container.clientWidth || window.innerWidth * 0.6;
      const newHeight = container.clientHeight || window.innerHeight * 0.6;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      starGeo.dispose();
      planets.forEach((planet) => {
        planet.geometry.dispose();
        planet.material.dispose();
      });
      starField.geometry.dispose();
      starField.material.dispose();
      container.innerHTML = "";
    };
  }, [star]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}

export default function StarDetails({ stars = [] }) {
  const { id: encodedId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const routeId = decodeURIComponent(encodedId ?? "");
  const stateStar = location.state?.star;

  const [star, setStar] = useState(() => {
    if (stateStar && matchesStarId(stateStar, routeId)) return stateStar;
    const local = stars.find((candidate) => matchesStarId(candidate, routeId));
    return local ?? null;
  });
  const [loading, setLoading] = useState(!star);
  const [error, setError] = useState(null);
  const [classification, setClassification] = useState(null);
  const [classifying, setClassifying] = useState(false);
  const [classificationError, setClassificationError] = useState(null);
  const [habitability, setHabitability] = useState(null);
  const [habitabilityLoading, setHabitabilityLoading] = useState(false);
  const [habitabilityError, setHabitabilityError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const resolveStar = async () => {
      if (stateStar && matchesStarId(stateStar, routeId)) {
        setStar(stateStar);
        setLoading(false);
        setError(null);
        return;
      }

      const local = stars.find((candidate) => matchesStarId(candidate, routeId));
      if (local) {
        setStar(local);
        setLoading(false);
        setError(null);
        return;
      }

      if (!routeId) {
        setError("Missing star identifier");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const fetched = await fetchStarById(routeId);
        if (cancelled) return;
        if (fetched && !fetched.error) {
          setStar(fetched);
          setError(null);
        } else {
          setError(fetched?.error || "Star not found");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || "Failed to load star data");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    resolveStar();

    return () => {
      cancelled = true;
    };
  }, [routeId, stars, stateStar]);

  useEffect(() => {
    setClassification(null);
    setClassificationError(null);
    setClassifying(false);
    setHabitability(null);
    setHabitabilityError(null);
    setHabitabilityLoading(false);
  }, [routeId]);

  const entries = useMemo(() => {
    if (!star) return [];
    return Object.entries(star).sort(([a], [b]) => a.localeCompare(b));
  }, [star]);

  const { featureVector, featureSummary } = useMemo(() => {
    const vector = buildFeatureVector(star);
    const summary = CLASSIFIER_FEATURES.map((key, index) => {
      let originalValue;
      switch (key) {
        case "mission_code":
          originalValue = star?.mission ?? "Unknown";
          break;
        case "disposition_code":
          originalValue = star?.disposition ?? star?.status ?? "Unknown";
          break;
        case "source_code":
          originalValue = star?.source ?? "Unknown";
          break;
        default:
          originalValue = star?.[key];
      }
      return {
        key,
        value: vector[index] ?? 0,
        original: originalValue,
      };
    });
    return { featureVector: vector, featureSummary: summary };
  }, [star]);

  const starIdentifier = useMemo(
    () =>
      normalizeId(star?.target_id) ||
      normalizeId(star?.id) ||
      normalizeId(routeId) ||
      normalizeId(star?.name),
    [star, routeId]
  );

  const habitabilityPayload = useMemo(() => {
    if (!star) return null;
    const baseId = starIdentifier || normalizeId(routeId) || `star-${Date.now()}`;
    return {
      id: baseId,
      period_days: toFiniteNumber(star.period_days),
      transit_duration_hours: toFiniteNumber(star.transit_duration_hours),
      depth_ppm: toFiniteNumber(star.depth_ppm),
      planet_radius_re: toFiniteNumber(star.planet_radius_re),
      stellar_radius_rs: toFiniteNumber(star.stellar_radius_rs),
      stellar_teff_k: toFiniteNumber(star.stellar_teff_k),
      stellar_logg: toFiniteNumber(star.stellar_logg),
      snr: toFiniteNumber(star.snr),
      ra: toFiniteNumber(star.ra),
      dec: toFiniteNumber(star.dec),
      insolation_flux: toFiniteNumber(star.insolation_flux ?? star.flux ?? 0),
      equilibrium_temp_k: toFiniteNumber(star.equilibrium_temp_k ?? star.stellar_teff_k ?? 0),
      mission: star.mission ?? undefined,
      source: star.source ?? undefined,
      status: star.disposition ?? star.status ?? undefined,
      classification_features: featureVector,
    };
  }, [star, starIdentifier, routeId, featureVector]);

  const formatDetailValue = (value) => {
    if (value === null || value === undefined || value === "") return "—";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return JSON.stringify(value, null, 0);
    return String(value);
  };

  const classificationImageCandidates = useMemo(
    () =>
      buildImageCandidateUrls(classification?.shap_image, starIdentifier, {
        directory: "/static",
        suffix: ".png",
      }),
    [classification?.shap_image, starIdentifier]
  );

  const habitabilityImageCandidates = useMemo(
    () =>
      buildImageCandidateUrls(habitability?.shap_image, habitabilityPayload?.id, {
        directory: "/static/habitability",
        suffix: "_habitability.png",
      }),
    [habitability?.shap_image, habitabilityPayload?.id]
  );

  const classificationImage = useImageFallback(classificationImageCandidates);
  const habitabilityImage = useImageFallback(habitabilityImageCandidates);

  const habitabilityFeatureRows = useMemo(() => {
    if (!habitability?.engineered_features) return [];
    return Object.entries(habitability.engineered_features).sort(([a], [b]) => a.localeCompare(b));
  }, [habitability]);

  const handleClassify = async () => {
    if (!star || classifying) return;
    setClassifying(true);
    setClassificationError(null);
    try {
      const idForModel = starIdentifier || `star-${Date.now()}`;
      const rawName = star.name ?? star.target_id ?? idForModel;
      const payload = {
        id: idForModel,
        ra: typeof star.ra === "number" ? star.ra : parseFloat(star.ra) || 0,
        dec: typeof star.dec === "number" ? star.dec : parseFloat(star.dec) || 0,
        name: rawName == null ? String(idForModel) : String(rawName),
        status: star.disposition || star.status || undefined,
        features: featureVector,
      };
      const result = await classifyStar(payload);
      setClassification(result);
      setClassificationError(null);
    } catch (err) {
      setClassification(null);
      setClassificationError(err?.message || "Classification failed");
    } finally {
      setClassifying(false);
    }
  };

  const handleHabitability = async () => {
    if (!habitabilityPayload || habitabilityLoading) return;
    setHabitabilityLoading(true);
    setHabitabilityError(null);
    try {
      const result = await predictHabitability(habitabilityPayload);
      setHabitability(result);
      setHabitabilityError(null);
    } catch (err) {
      setHabitability(null);
      setHabitabilityError(err?.message || "Habitability prediction failed");
    } finally {
      setHabitabilityLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 60px)",
          color: "#f0f4ff",
          background: "radial-gradient(circle at top, #121a3b, #05060f)",
        }}
      >
        Loading star system...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
          height: "calc(100vh - 60px)",
          color: "#ff6b6b",
          background: "radial-gradient(circle at top, #121a3b, #05060f)",
        }}
      >
        <h2 style={{ margin: 0 }}>We couldn't find that star.</h2>
        <p style={{ margin: 0, color: "#f0f4ff" }}>{error}</p>
      </div>
    );
  }

  if (!star) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 60px)",
        background: "linear-gradient(135deg, rgba(4,6,20,0.95) 0%, rgba(10,12,28,0.98) 100%)",
        color: "#f2f6ff",
      }}
    >
      <div style={{ flex: "1 1 60%", position: "relative" }}>
        <button
          type="button"
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 3,
            background: "rgba(0,0,0,0.55)",
            color: "#f2f6ff",
            border: "1px solid rgba(157,181,255,0.4)",
            padding: "8px 14px",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "13px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            backdropFilter: "blur(4px)",
          }}
        >
          ← Back
        </button>
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 2,
            background: "rgba(0,0,0,0.45)",
            padding: "12px 18px",
            borderRadius: "10px",
            backdropFilter: "blur(4px)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "24px" }}>
            {star.name || star.target_id || "Unnamed Star"}
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#9db5ff" }}>
            Mission: {star.mission || "Unknown"}
          </p>
        </div>
        <PlanetarySystem star={star} />
      </div>

      <div
        style={{
          flex: "1 1 40%",
          padding: "24px 28px",
          overflowY: "auto",
          background: "rgba(3,5,20,0.8)",
          boxShadow: "-12px 0 24px rgba(0,0,0,0.35)",
        }}
      >
        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ marginBottom: "12px", fontSize: "20px" }}>AI Classification</h2>
          <p style={{ marginTop: 0, marginBottom: "12px", color: "#9db5ff" }}>
            Send this star's key metrics to the FastAPI <code>/classify</code> endpoint and fetch a fresh model
            prediction together with an updated SHAP explanation plot.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <button
              type="button"
              onClick={handleClassify}
              disabled={classifying}
              style={{
                padding: "8px 18px",
                background: "#3b82f6",
                border: "none",
                borderRadius: "8px",
                color: "white",
                cursor: classifying ? "not-allowed" : "pointer",
                opacity: classifying ? 0.7 : 1,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {classifying ? "Classifying..." : "Run Classification"}
            </button>
            {classification && (
              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: "rgba(25,35,70,0.75)",
                  border: "1px solid rgba(80,110,200,0.3)",
                  color: "#9fffc3",
                  fontSize: "14px",
                }}
              >
                Model prediction code: <strong>{classification.prediction}</strong>
              </div>
            )}
          </div>
          {classificationError && (
            <p style={{ marginTop: "12px", color: "#ff7878" }}>{classificationError}</p>
          )}
          <div style={{ marginTop: "16px" }}>
            <h4 style={{ margin: 0, marginBottom: "8px", fontSize: "14px", color: "#9db5ff" }}>
              Feature vector sent to the model
            </h4>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "12px",
                border: "1px solid rgba(80,110,200,0.2)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <thead style={{ background: "rgba(16,22,46,0.85)", color: "#9db5ff" }}>
                <tr>
                  <th style={{ textAlign: "left", padding: "6px 8px" }}>Feature</th>
                  <th style={{ textAlign: "right", padding: "6px 8px" }}>Value</th>
                  <th style={{ textAlign: "right", padding: "6px 8px" }}>Raw</th>
                </tr>
              </thead>
              <tbody>
                {featureSummary.map(({ key, value, original }) => (
                  <tr key={key} style={{ background: "rgba(12,16,34,0.6)" }}>
                    <td style={{ padding: "6px 8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {key}
                    </td>
                    <td style={{ padding: "6px 8px", textAlign: "right", color: "#f5f8ff" }}>
                      {Number.isFinite(value) ? value.toLocaleString(undefined, { maximumFractionDigits: 3 }) : value}
                    </td>
                    <td style={{ padding: "6px 8px", textAlign: "right", color: "#9db5ff" }}>
                      {original === undefined || original === null || original === ""
                        ? "—"
                        : Number.isFinite(original)
                          ? original.toLocaleString(undefined, { maximumFractionDigits: 3 })
                          : String(original)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ marginBottom: "12px", fontSize: "20px" }}>Habitability Analysis</h2>
          <p style={{ marginTop: 0, marginBottom: "12px", color: "#9db5ff" }}>
            Evaluate this star system with the habitability meta-model, returning an overall score and
            explanation of the driving engineered features.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <button
              type="button"
              onClick={handleHabitability}
              disabled={habitabilityLoading || !habitabilityPayload}
              style={{
                padding: "8px 18px",
                background: "#22c55e",
                border: "none",
                borderRadius: "8px",
                color: "white",
                cursor: habitabilityLoading ? "not-allowed" : "pointer",
                opacity: habitabilityLoading ? 0.7 : 1,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {habitabilityLoading ? "Evaluating..." : "Run Habitability"}
            </button>
            {habitability && (
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  background: "rgba(24,46,36,0.75)",
                  border: "1px solid rgba(88,196,133,0.35)",
                }}
              >
                <span style={{ color: "#d1fae5", fontSize: "14px" }}>
                  Label: <strong>{habitability.label}</strong>
                </span>
                <span style={{ color: "#bef264", fontSize: "14px" }}>
                  Score: <strong>{(habitability.score * 100).toFixed(2)}%</strong>
                </span>
              </div>
            )}
          </div>
          {habitabilityError && (
            <p style={{ marginTop: "12px", color: "#ff7878" }}>{habitabilityError}</p>
          )}
          {habitabilityFeatureRows.length > 0 && (
            <div style={{ marginTop: "16px" }}>
              <h4 style={{ margin: 0, marginBottom: "8px", fontSize: "14px", color: "#9db5ff" }}>
                Engineered features supplied to the habitability model
              </h4>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "12px",
                  border: "1px solid rgba(70,150,120,0.25)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <thead style={{ background: "rgba(20,42,32,0.9)", color: "#9db5ff" }}>
                  <tr>
                    <th style={{ textAlign: "left", padding: "6px 8px" }}>Feature</th>
                    <th style={{ textAlign: "right", padding: "6px 8px" }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {habitabilityFeatureRows.map(([key, value]) => (
                    <tr key={key} style={{ background: "rgba(12,22,18,0.65)" }}>
                      <td
                        style={{
                          padding: "6px 8px",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          color: "#86efac",
                        }}
                      >
                        {key}
                      </td>
                      <td style={{ padding: "6px 8px", textAlign: "right", color: "#f5f8ff" }}>
                        {Number.isFinite(value)
                          ? value.toLocaleString(undefined, { maximumFractionDigits: 4 })
                          : value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {habitabilityImageCandidates.length > 0 && (
            <div
              style={{
                marginTop: "16px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(70,150,120,0.35)",
                background: "rgba(12,22,18,0.65)",
              }}
            >
              {!habitabilityImage.hidden && habitabilityImage.src ? (
                <img
                  src={habitabilityImage.src}
                  alt={`Habitability SHAP explanation for ${habitabilityPayload?.id || starIdentifier}`}
                  style={{ width: "100%", display: "block" }}
                  onError={habitabilityImage.handleError}
                />
              ) : (
                <div
                  style={{
                    padding: "16px",
                    color: "#9db5ff",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  We couldn't load a habitability SHAP plot for this star yet. Try running a fresh habitability
                  analysis above.
                </div>
              )}
              <p style={{ padding: "12px", margin: 0, color: "#86efac", fontSize: "12px" }}>
                Habitability explainability plot generated for this request (if available).
              </p>
            </div>
          )}
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ marginBottom: "12px", fontSize: "20px" }}>System Snapshot</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              { label: "Right Ascension", value: star.ra, unit: "°" },
              { label: "Declination", value: star.dec, unit: "°" },
              { label: "Orbital Period", value: star.period_days, unit: "days" },
              { label: "Transit Duration", value: star.transit_duration_hours, unit: "hours" },
              { label: "Planet Radius", value: star.planet_radius_re, unit: "R⊕" },
              { label: "Stellar Radius", value: star.stellar_radius_rs, unit: "R☉" },
              { label: "Stellar Teff", value: star.stellar_teff_k, unit: "K" },
              { label: "Log g", value: star.stellar_logg },
              { label: "Signal-to-Noise", value: star.snr },
              { label: "Depth", value: star.depth_ppm, unit: "ppm" },
              { label: "Disposition", value: star.disposition },
              { label: "Catalog", value: star.source },
            ].map(({ label, value, unit }) => (
              <div
                key={label}
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  background: "rgba(16,22,46,0.85)",
                  border: "1px solid rgba(80,110,200,0.25)",
                }}
              >
                <p style={{ margin: 0, fontSize: "12px", color: "#9db5ff" }}>{label}</p>
                <p style={{ margin: "4px 0 0", fontSize: "16px" }}>
                  {value !== undefined && value !== null && value !== ""
                    ? `${typeof value === "number" && Number.isFinite(value)
                        ? value.toLocaleString(undefined, { maximumFractionDigits: 3 })
                        : value}${unit ? ` ${unit}` : ""}`
                    : "—"}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: "12px", fontSize: "20px" }}>Raw Data</h2>
          <div
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(80,110,200,0.25)",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <tbody>
                {entries.map(([key, value]) => (
                  <tr key={key} style={{ background: "rgba(12,16,34,0.75)" }}>
                    <td
                      style={{
                        padding: "8px 10px",
                        borderBottom: "1px solid rgba(80,110,200,0.15)",
                        color: "#8ea3d8",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        width: "40%",
                      }}
                    >
                      {key}
                    </td>
                    <td
                      style={{
                        padding: "8px 10px",
                        borderBottom: "1px solid rgba(80,110,200,0.1)",
                        color: "#f5f8ff",
                      }}
                    >
                      {formatDetailValue(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {classificationImageCandidates.length > 0 && (
          <section style={{ marginTop: "24px" }}>
            <h2 style={{ marginBottom: "12px", fontSize: "20px" }}>Classification SHAP Explanation</h2>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(80,110,200,0.25)",
                background: "rgba(12,16,34,0.75)",
              }}
            >
              {!classificationImage.hidden && classificationImage.src ? (
                <img
                  src={classificationImage.src}
                  alt={`SHAP explanation for ${star.target_id || star.id || starIdentifier}`}
                  style={{ width: "100%", display: "block" }}
                  onError={classificationImage.handleError}
                />
              ) : (
                <div
                  style={{
                    padding: "16px",
                    color: "#9db5ff",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  We couldn't load a classification SHAP image yet. Run the classification above to generate a new
                  explanation.
                </div>
              )}
              <p style={{ padding: "12px", margin: 0, color: "#9db5ff", fontSize: "12px" }}>
                Generated explainability plot for classification model (if available).
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
