import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pingBackend } from "../api";

const GITHUB_URL = "https://github.com/sasidharJasty/ExoNet";

export default function Navbar() {
  const [status, setStatus] = useState("checking");
  const [lastChecked, setLastChecked] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

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
    // show the hint modal on first load unless user opted out
    try {
      const seen = window.localStorage.getItem("exo_hint_shown");
      if (!seen) setShowHint(true);
    } catch (e) {
      setShowHint(true);
    }
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
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Open GitHub repository"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 10px",
            borderRadius: "8px",
            color: "#fff",
            textDecoration: "none",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.78 3.09 8.83 7.38 10.26.54.1.74-.24.74-.53 0-.26-.01-1.13-.02-2.05-3 .66-3.63-1.45-3.63-1.45-.49-1.25-1.2-1.59-1.2-1.59-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.65 2.52 1.17 3.13.9.1-.7.38-1.17.69-1.44-2.4-.27-4.93-1.2-4.93-5.33 0-1.18.42-2.14 1.12-2.9-.11-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.11.88-.25 1.83-.38 2.77-.38.94 0 1.89.13 2.77.38 2.1-1.4 3.02-1.11 3.02-1.11.6 1.54.22 2.68.11 2.96.7.76 1.12 1.72 1.12 2.9 0 4.13-2.54 5.05-4.96 5.32.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.75.53C19.01 20.43 22.1 16.38 22.1 11.6 22.1 5.33 17.27.5 12 .5z" fill="#fff"/>
          </svg>
          <span style={{ fontWeight: 600 }}>GitHub</span>
        </a>
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
      {/* Hint modal shown once unless user disables it */}
      {showHint && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(2,6,23,0.6)",
            zIndex: 9999,
          }}
        >
          <div style={{ width: 420, background: "#0b1220", color: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 8px 30px rgba(0,0,0,0.6)" }}>
            <h3 style={{ marginTop: 0 }}>Tip: Open a star</h3>
            <p style={{ marginTop: 8, color: "#cbd6ff" }}>
              To open a specific star's details, right-click (context menu) on the star in the main view and select "Open". This will open a full-page detail view including AI classification and explainability plots.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                />
                <span style={{ color: "#9db5ff" }}>Don't show again</span>
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  type="button"
                  onClick={() => {
                    if (dontShowAgain) {
                      try { window.localStorage.setItem("exo_hint_shown", "1"); } catch (e) {}
                    }
                    setShowHint(false);
                  }}
                  style={{ padding: "8px 12px", borderRadius: 8, border: "none", background: "#3b82f6", color: "white", cursor: "pointer" }}
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
