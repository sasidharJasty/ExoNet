import React, { useRef } from "react";
import axios from "axios";

export default function UploadPanel({ onNewStars }) {
  const fileRef = useRef();

  const uploadCSV = async () => {
    const file = fileRef.current.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://127.0.0.1:8000/upload_csv", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    alert(`${res.data.added} stars added.`);
    if (onNewStars) onNewStars([]);
  };

  return (
    <div style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
      <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: 500, color: "#fff" }}>Upload CSV</h3>
      <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
        <input 
          type="file" 
          ref={fileRef} 
          accept=".csv" 
          style={{ 
            color: "#888", 
            fontSize: "13px",
            cursor: "pointer"
          }}
        />
        <button 
          onClick={uploadCSV} 
          style={{ 
            background: "#fff", 
            color: "#000", 
            border: "none", 
            padding: "6px 16px", 
            borderRadius: "6px", 
            fontWeight: 600, 
            fontSize: "13px",
            cursor: "pointer",
            transition: "opacity 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
