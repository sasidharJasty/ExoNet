import React, { useMemo, useState } from "react";
import { fetchStars, uploadCSV, uploadStar } from "../api";

export default function Upload({ stars, setStars }) {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [quickStar, setQuickStar] = useState({
    id: "",
    ra: "",
    dec: "",
    name: "",
    status: "",
    features: "",
  });
  const [quickStatus, setQuickStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const numericPlaceholder = useMemo(
    () => "Comma-separated, e.g. 0.12, 4.5, -3.2",
    []
  );

  const handleUpload = async () => {
    if (!file || isUploading) return;
    setIsUploading(true);
    setUploadStatus("Uploading CSV...");
    try {
      const res = await uploadCSV(file);
      setUploadStatus(`Added ${res.added} stars.`);
      const newStars = await fetchStars();
      setStars(newStars);
      setFile(null);
    } catch (error) {
      console.error(error);
      setUploadStatus(`Upload failed: ${error.message ?? error}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleQuickSubmit = async () => {
    if (!quickStar.id) {
      setQuickStatus("Please provide an ID (target name) for the star.");
      return;
    }

    setIsSaving(true);
    setQuickStatus("Saving star...");

    try {
      const featuresArray = quickStar.features
        ? quickStar.features.split(",").map((value) => {
            const parsed = parseFloat(value.trim());
            return Number.isFinite(parsed) ? parsed : 0;
          })
        : undefined;

      const payload = {
        id: String(quickStar.id),
        ra: parseFloat(quickStar.ra) || 0,
        dec: parseFloat(quickStar.dec) || 0,
        name: quickStar.name || undefined,
        status: quickStar.status || undefined,
        features: featuresArray,
      };

      await uploadStar(payload);
      setQuickStatus("Star saved successfully.");
      setQuickStar({ id: "", ra: "", dec: "", name: "", status: "", features: "" });
      const newStars = await fetchStars();
      setStars(newStars);
    } catch (error) {
      console.error(error);
      setQuickStatus(`Save failed: ${error.message ?? error}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ padding: 24, color: "#fff", minHeight: "calc(100vh - 60px)", background: "#000000", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <h2 style={{ marginBottom: "24px", fontSize: "28px", fontWeight: 500, letterSpacing: "-0.02em" }}>Dataset Management</h2>

      <section
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "18px", fontWeight: 500 }}>Bulk CSV Upload</h3>
        <p style={{ marginTop: 0, color: "#888", fontSize: "14px", marginBottom: "20px" }}>
          Upload mission catalogs or custom detections as CSV and they will be merged into the starfield.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <input
            type="file"
            accept=".csv"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            style={{ color: "#888", fontSize: "13px" }}
          />
          <button
            type="button"
            onClick={handleUpload}
            disabled={!file || isUploading}
            style={{
              padding: "8px 20px",
              background: "#fff",
              border: "none",
              borderRadius: "6px",
              color: "#000",
              cursor: !file || isUploading ? "not-allowed" : "pointer",
              opacity: !file || isUploading ? 0.5 : 1,
              fontWeight: 600,
              fontSize: "13px",
              transition: "opacity 0.2s"
            }}
            onMouseEnter={(e) => !(!file || isUploading) && (e.currentTarget.style.opacity = 0.8)}
            onMouseLeave={(e) => !(!file || isUploading) && (e.currentTarget.style.opacity = 1)}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </div>
        {uploadStatus && <p style={{ marginTop: "16px", color: "#fff", fontSize: "14px", fontWeight: 500 }}>{uploadStatus}</p>}
      </section>

      <section
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "18px", fontWeight: 500 }}>Quick Add via JSON API</h3>
        <p style={{ marginTop: 0, color: "#888", fontSize: "14px", marginBottom: "20px" }}>
          Use the backend's <code style={{ color: "#fff", background: "rgba(255,255,255,0.1)", padding: "2px 4px", borderRadius: "4px" }}>/upload_json</code> endpoint to register a single star.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {[
            { label: "Identifier *", value: quickStar.id, field: "id", placeholder: "e.g. KIC-8478994", type: "text" },
            { label: "Right Ascension (deg)", value: quickStar.ra, field: "ra", placeholder: "e.g. 289.123", type: "number" },
            { label: "Declination (deg)", value: quickStar.dec, field: "dec", placeholder: "e.g. 42.77", type: "number" },
            { label: "Display Name", value: quickStar.name, field: "name", placeholder: "Optional descriptive name", type: "text" },
            { label: "Status / Disposition", value: quickStar.status, field: "status", placeholder: "e.g. Candidate", type: "text" },
          ].map((item) => (
            <label key={item.label} style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#888" }}>
              <span>{item.label}</span>
              <input
                type={item.type}
                value={quickStar[item.field]}
                onChange={(event) => setQuickStar((prev) => ({ ...prev, [item.field]: event.target.value }))}
                placeholder={item.placeholder}
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)", color: "#fff", fontSize: "13px" }}
              />
            </label>
          ))}
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#888", gridColumn: "1 / -1" }}>
            <span>Model Features</span>
            <textarea
              value={quickStar.features}
              onChange={(event) => setQuickStar((prev) => ({ ...prev, features: event.target.value }))}
              placeholder={numericPlaceholder}
              rows={3}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)", color: "#fff", fontSize: "13px" }}
            />
          </label>
        </div>
        <button
          type="button"
          onClick={handleQuickSubmit}
          disabled={isSaving}
          style={{
            marginTop: "24px",
            padding: "10px 24px",
            background: "#fff",
            border: "none",
            borderRadius: "6px",
            color: "#000",
            cursor: isSaving ? "not-allowed" : "pointer",
            opacity: isSaving ? 0.5 : 1,
            fontWeight: 600,
            fontSize: "13px",
            transition: "opacity 0.2s"
          }}
          onMouseEnter={(e) => !isSaving && (e.currentTarget.style.opacity = 0.8)}
          onMouseLeave={(e) => !isSaving && (e.currentTarget.style.opacity = 1)}
        >
          {isSaving ? "Saving..." : "Add Star"}
        </button>
        {quickStatus && (
          <p style={{ marginTop: "16px", color: quickStatus.startsWith("Save failed") ? "#ff8080" : "#fff", fontSize: "14px", fontWeight: 500 }}>
            {quickStatus}
          </p>
        )}
      </section>

      <section style={{ marginTop: "32px", color: "#888", fontSize: "14px" }}>
        <h4 style={{ marginBottom: "4px", color: "#fff", fontSize: "16px", fontWeight: 500 }}>Current catalog size</h4>
        <p style={{ margin: 0 }}>{stars.length.toLocaleString()} stars available in the visualization.</p>
      </section>
    </div>
  );
}
