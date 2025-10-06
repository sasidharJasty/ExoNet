import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useNavigate } from "react-router-dom";

export default function Starfield({ stars = [] }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const pointsRef = useRef(null);
  const starMapRef = useRef([]);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  const navigate = useNavigate();

  const [hoveredStar, setHoveredStar] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [colorMode, setColorMode] = useState("mission");
  const [selectedFeature, setSelectedFeature] = useState("stellar_teff_k");
  const [activeMissions, setActiveMissions] = useState(["KEPLER", "K2", "TESS", "0"]);
  const [featureRange, setFeatureRange] = useState({ min: 0, max: 1 });
  const [filterRange, setFilterRange] = useState({ min: 0, max: 1 });

  const missionColors = {
    KEPLER: new THREE.Color(0x1f77b4),
    K2: new THREE.Color(0xff7f0e),
    TESS: new THREE.Color(0x2ca02c),
    0: new THREE.Color(0x888888),
    default: new THREE.Color(0xaaaaaa),
  };

  useEffect(() => {
    if (!stars.length) return;
    const values = stars
      .map((s) => s[selectedFeature])
      .filter((v) => typeof v === "number" && Number.isFinite(v));
    if (!values.length) return;
    const min = Math.min(...values);
    const max = Math.max(...values);
    setFeatureRange({ min, max });
    setFilterRange({ min, max });
  }, [stars, selectedFeature]);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
  camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
  controls.target.set(0, 0, 0);
  controls.update();

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    controlsRef.current = controls;

    const animate = () => {
      requestAnimationFrame(animate);
      controlsRef.current?.update();
      rendererRef.current?.render(sceneRef.current, cameraRef.current);
    };
    animate();

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current || !stars.length) return;

    const scene = sceneRef.current;

    if (pointsRef.current) {
      scene.remove(pointsRef.current);
      pointsRef.current.geometry.dispose();
      pointsRef.current.material.dispose();
      pointsRef.current = null;
    }

    const filteredStars = stars.filter((star) => {
      if (colorMode === "mission") {
        const missionKey = star.mission ?? "default";
        return activeMissions.includes(missionKey);
      }
      const value = star[selectedFeature];
      if (typeof value !== "number" || !Number.isFinite(value)) return false;
      return value >= filterRange.min && value <= filterRange.max;
    });

    const positions = new Float32Array(filteredStars.length * 3);
    const colors = new Float32Array(filteredStars.length * 3);
    const radius = 50;
    const starMap = [];

    filteredStars.forEach((star, index) => {
      const phi = (90 - (star.dec ?? 0)) * (Math.PI / 180);
      const theta = (star.ra ?? 0) * (Math.PI / 180);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      positions[index * 3] = x;
      positions[index * 3 + 1] = y;
      positions[index * 3 + 2] = z;

      let color;
      if (colorMode === "mission") {
        const missionKey = star.mission ?? "default";
        color = missionColors[missionKey] ?? missionColors.default;
      } else {
        const value = star[selectedFeature] ?? featureRange.min;
        const denom = featureRange.max - featureRange.min || 1;
        const t = THREE.MathUtils.clamp((value - featureRange.min) / denom, 0, 1);
        color = new THREE.Color().setHSL((1 - t) * 0.6, 1, 0.5);
      }

      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;

      starMap.push(star);
    });

    starMapRef.current = starMap;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.5, vertexColors: true });
    const points = new THREE.Points(geometry, material);

    scene.add(points);
    pointsRef.current = points;
  }, [stars, selectedFeature, colorMode, activeMissions, filterRange, featureRange]);

  useEffect(() => {
    const pickStarFromEvent = (event) => {
      if (!cameraRef.current || !pointsRef.current) return null;
      const mouse = mouseRef.current;
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycasterRef.current.setFromCamera(mouse, cameraRef.current);
      const intersects = raycasterRef.current.intersectObject(pointsRef.current);
      if (intersects.length > 0) {
        const idx = intersects[0].index ?? 0;
        return starMapRef.current[idx] ?? null;
      }
      return null;
    };

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      const picked = pickStarFromEvent(event);
      setHoveredStar(picked);
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
      const picked = pickStarFromEvent(event) ?? hoveredStar;
      if (!picked) return;
      const rawId =
        picked.target_id ??
        picked.id ??
        picked.name ??
        picked.kepler_id ??
        picked.tic_id;
      if (!rawId) return;
      const starId = encodeURIComponent(String(rawId));
      navigate(`/star/${starId}`, { state: { star: picked } });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [hoveredStar, navigate]);

  const missionLegend = {
    KEPLER: "#1f77b4",
    K2: "#ff7f0e",
    TESS: "#2ca02c",
    0: "#888888",
  };

  return (
    <>
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />
      {hoveredStar && (
        <div
          style={{
            position: "absolute",
            top: mousePos.y + 15,
            left: mousePos.x + 15,
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "6px 10px",
            borderRadius: "4px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {hoveredStar.target_id || hoveredStar.name || "Unknown"}
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "10px",
          borderRadius: "4px",
          maxWidth: "220px",
        }}
      >
        <div>
          Color mode:
          <select value={colorMode} onChange={(e) => setColorMode(e.target.value)}>
            <option value="mission">Mission</option>
            <option value="feature">Feature</option>
          </select>
        </div>

        {colorMode === "feature" && stars[0] && (
          <>
            <div style={{ marginTop: "8px" }}>
              Feature:
              <select
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
              >
                {Object.keys(stars[0])
                  .filter((key) => typeof stars[0][key] === "number")
                  .map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
              </select>
            </div>
            <div style={{ marginTop: "8px" }}>
              <input
                type="range"
                min={featureRange.min}
                max={featureRange.max}
                step={(featureRange.max - featureRange.min) / 100 || 0.01}
                value={filterRange.min}
                onChange={(e) =>
                  setFilterRange((current) => ({
                    ...current,
                    min: parseFloat(e.target.value),
                  }))
                }
              />
              <input
                type="range"
                min={featureRange.min}
                max={featureRange.max}
                step={(featureRange.max - featureRange.min) / 100 || 0.01}
                value={filterRange.max}
                onChange={(e) =>
                  setFilterRange((current) => ({
                    ...current,
                    max: parseFloat(e.target.value),
                  }))
                }
              />
              <div style={{ fontSize: "12px" }}>
                Showing {filterRange.min.toFixed(2)} → {filterRange.max.toFixed(2)}
              </div>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  marginTop: "4px",
                  background:
                    "linear-gradient(to right, hsl(240,100%,50%), hsl(0,100%,50%))",
                }}
              />
            </div>
          </>
        )}

        {colorMode === "mission" && (
          <div style={{ marginTop: "8px" }}>
            {Object.entries(missionLegend).map(([mission, color]) => (
              <div
                key={mission}
                onClick={() =>
                  setActiveMissions((prev) =>
                    prev.includes(mission)
                      ? prev.filter((m) => m !== mission)
                      : [...prev, mission]
                  )
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  marginBottom: "4px",
                  cursor: "pointer",
                  opacity: activeMissions.includes(mission) ? 1 : 0.4,
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: color,
                    marginRight: "6px",
                  }}
                />
                {mission}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
