// StarPanel.jsx
import React from "react";

export default function StarPanel({ star }) {
  if (!star) return (
    <div style={{ 
      padding: "20px", 
      color: "#888", 
      fontSize: "14px", 
      textAlign: "center",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(10px)"
    }}>
      No star selected
    </div>
  );

  return (
    <div style={{ 
      padding: "20px", 
      color: "#fff", 
      background: "rgba(0,0,0,0.7)", 
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "12px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      <h2 style={{ margin: "0 0 16px 0", fontSize: "20px", fontWeight: 500, letterSpacing: "-0.02em" }}>
        {star.name || star.id || "Unnamed Star"}
      </h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "4px" }}>
          <span style={{ color: "#888" }}>RA</span>
          <span style={{ fontWeight: 500 }}>{star.ra?.toFixed(2) || "N/A"}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "4px" }}>
          <span style={{ color: "#888" }}>Dec</span>
          <span style={{ fontWeight: 500 }}>{star.dec?.toFixed(2) || "N/A"}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "4px" }}>
          <span style={{ color: "#888" }}>Status</span>
          <span style={{ fontWeight: 500 }}>{star.status || "Unknown"}</span>
        </div>
      </div>

      <div style={{ marginTop: "16px" }}>
        <span style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Features</span>
        <div style={{ 
          marginTop: "4px", 
          fontSize: "13px", 
          color: "#ddd", 
          lineHeight: "1.4",
          background: "rgba(255,255,255,0.05)",
          padding: "8px",
          borderRadius: "6px"
        }}>
          {star.features ? star.features.join(", ") : "N/A"}
        </div>
      </div>

      {star.id && (
        <div style={{ marginTop: "16px" }}>
          <img
            src={`http://127.0.0.1:8000/shap/${star.id}`}
            alt="SHAP Analysis"
            style={{ 
              width: "100%", 
              borderRadius: "8px", 
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#000"
            }}
          />
        </div>
      )}
    </div>
  );
}
