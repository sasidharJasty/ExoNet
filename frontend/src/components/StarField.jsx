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
  const [featureFilter, setFeatureFilter] = useState("");
  const [controlsOpen, setControlsOpen] = useState(true);
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

      {/* Floating gear button to open controls popup */}
      <button
        type="button"
        onClick={() => setControlsOpen((s) => !s)}
        aria-label="Open display controls"
        style={{
          position: "absolute",
          left: 16,
          bottom: 18,
          zIndex: 9998,
          width: 44,
          height: 44,
          borderRadius: 10,
          border: "none",
          background: "rgba(11,13,23,0.9)",
          color: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
          cursor: "pointer",
        }}
      >
        ⚙️
      </button>

      {/* Controls popup/modal */}
      {controlsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "absolute",
            left: 18,
            top: 60,
            zIndex: 9999,
            width: 320,
            background: "linear-gradient(180deg, rgba(6,10,20,0.98), rgba(8,12,24,0.96))",
            color: "#fff",
            padding: 14,
            borderRadius: 12,
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <strong style={{ fontSize: 16 }}>Display Controls</strong>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button onClick={() => { setColorMode('mission'); }} style={{ padding: 6, borderRadius: 8, background: colorMode === 'mission' ? '#25406a' : 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>Mission</button>
              <button onClick={() => { setColorMode('feature'); }} style={{ padding: 6, borderRadius: 8, background: colorMode === 'feature' ? '#25406a' : 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>Feature</button>
              <button onClick={() => setControlsOpen(false)} aria-label="Close" style={{ background: 'transparent', border: 'none', color: '#cbd6ff', cursor: 'pointer' }}>✕</button>
            </div>
          </div>

          <div style={{ maxHeight: 340, overflowY: 'auto' }}>
            {colorMode === 'feature' && stars[0] && (
              <div>
                <div style={{ fontSize: 12, marginBottom: 8 }}>Feature (search and click)</div>
                <input
                  type="text"
                  placeholder="Filter features..."
                  value={featureFilter}
                  onChange={(e) => setFeatureFilter(e.target.value)}
                  style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', color: '#fff', marginBottom: 10 }}
                />
                <div style={{ maxHeight: 180, overflowY: 'auto', borderRadius: 8, border: '1px solid rgba(255,255,255,0.03)', marginBottom: 10 }}>
                  {Object.keys(stars[0]).filter((key) => typeof stars[0][key] === 'number').filter((key) => key.toLowerCase().includes(featureFilter.toLowerCase())).map((key) => (
                    <div key={key} onClick={() => { setSelectedFeature(key); setFeatureFilter(''); }} style={{ padding: '8px 10px', cursor: 'pointer', background: key === selectedFeature ? 'rgba(255,255,255,0.06)' : 'transparent', color: key === selectedFeature ? '#fff' : '#dfeaff' }}>{key}</div>
                  ))}
                </div>
                <div style={{ fontSize: 12, marginBottom: 6 }}>Range</div>
                <input type="range" min={featureRange.min} max={featureRange.max} step={(featureRange.max - featureRange.min) / 100 || 0.01} value={filterRange.min} onChange={(e) => setFilterRange((c) => ({ ...c, min: parseFloat(e.target.value) }))} />
                <input type="range" min={featureRange.min} max={featureRange.max} step={(featureRange.max - featureRange.min) / 100 || 0.01} value={filterRange.max} onChange={(e) => setFilterRange((c) => ({ ...c, max: parseFloat(e.target.value) }))} />
                <div style={{ fontSize: 12, marginTop: 6 }}>Showing {filterRange.min.toFixed(2)} → {filterRange.max.toFixed(2)}</div>
              </div>
            )}

            {colorMode === 'mission' && (
              <div>
                <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                  <button onClick={() => setActiveMissions(Object.keys(missionLegend))} style={{ padding: '8px 10px', borderRadius: 8, background: '#25406a', color: '#fff', border: 'none', cursor: 'pointer' }}>Select all</button>
                  <button onClick={() => setActiveMissions([])} style={{ padding: '8px 10px', borderRadius: 8, background: '#22283a', color: '#fff', border: 'none', cursor: 'pointer' }}>Clear</button>
                </div>
                {Object.entries(missionLegend).map(([mission, color]) => (
                  <div key={mission} onClick={() => setActiveMissions((prev) => prev.includes(mission) ? prev.filter((m) => m !== mission) : [...prev, mission])} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, cursor: 'pointer', background: activeMissions.includes(mission) ? 'rgba(255,255,255,0.03)' : 'transparent', marginBottom: 8 }}>
                    <div style={{ width: 18, height: 18, backgroundColor: color, borderRadius: 4, boxShadow: `0 6px 18px ${color}` }} />
                    <div style={{ flex: 1 }}>{mission}</div>
                    <div style={{ width: 18, height: 18, borderRadius: 4, background: activeMissions.includes(mission) ? '#8ef7b6' : 'transparent', border: activeMissions.includes(mission) ? '1px solid rgba(0,0,0,0.2)' : '1px solid rgba(255,255,255,0.06)' }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
