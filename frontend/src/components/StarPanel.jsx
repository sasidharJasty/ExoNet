// StarPanel.jsx
import React from "react";

export default function StarPanel({ star }) {
  if (!star) return <div>No star selected</div>;

  return (
    <div style={{ padding: 10 }}>
      <h2>{star.name || star.id || "Unnamed Star"}</h2>
      <p><strong>RA:</strong> {star.ra?.toFixed(2) || "N/A"}</p>
      <p><strong>Dec:</strong> {star.dec?.toFixed(2) || "N/A"}</p>
      <p><strong>Status:</strong> {star.status || "Unknown"}</p>
      <p><strong>Features:</strong> {star.features ? star.features.join(", ") : "N/A"}</p>
      {star.id && (
        <img
          src={`http://127.0.0.1:8000/shap/${star.id}`}
          alt="SHAP"
          style={{ width: "100%", marginTop: 10 }}
        />
      )}
    </div>
  );
}
