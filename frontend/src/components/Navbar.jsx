import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pingBackend } from "../api";

export default function Navbar() {
  const [status, setStatus] = useState("checking");
  const [lastChecked, setLastChecked] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const checkHealth = async () => {
      try {
        await pingBackend();
        if (!cancelled) {
          setStatus("online");
          setLastChecked(new Date());
        }
      } catch (err) {
        if (!cancelled) {
          setStatus("offline");
          setLastChecked(new Date());
        }
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const statusColor = status === "online" ? "#2ecc71" : status === "offline" ? "#e74c3c" : "#f1c40f";
  const statusLabel = status === "online" ? "Backend Online" : status === "offline" ? "Backend Offline" : "Checking backend...";

  return (
    <nav
      style={{
        padding: "0.85rem 1.5rem",
        background: "#0b0c17",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/" style={{ marginRight: 20, color: "#fff", textDecoration: "none", fontWeight: 600 }}>
          Home
        </Link>
        <Link to="/upload" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
          Upload
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 10px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          title={lastChecked ? `Last checked at ${lastChecked.toLocaleTimeString()}` : undefined}
        >
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: statusColor,
              boxShadow: `0 0 8px ${statusColor}`,
            }}
          />
          {statusLabel}
        </span>
        <button
          type="button"
          onClick={() => {
            setStatus("checking");
            pingBackend()
              .then(() => setStatus("online"))
              .catch(() => setStatus("offline"))
              .finally(() => setLastChecked(new Date()));
          }}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            padding: "4px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.8rem",
          }}
        >
          Refresh
        </button>
      </div>
    </nav>
  );
}
