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
    <div style={{ padding: 24, color: "#f5f8ff", minHeight: "calc(100vh - 60px)", background: "linear-gradient(140deg, rgba(6,9,30,0.95) 0%, rgba(10,14,38,0.98) 100%)" }}>
      <h2 style={{ marginBottom: "16px" }}>Dataset Management</h2>

      <section
        style={{
          background: "rgba(12,16,34,0.85)",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "24px",
          border: "1px solid rgba(120,140,220,0.2)",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "12px" }}>Bulk CSV Upload</h3>
        <p style={{ marginTop: 0, color: "#9db5ff" }}>
          Upload mission catalogs or custom detections as CSV and they will be merged into the starfield.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <input
            type="file"
            accept=".csv"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            style={{ color: "#fff" }}
          />
          <button
            type="button"
            onClick={handleUpload}
            disabled={!file || isUploading}
            style={{
              padding: "8px 16px",
              background: "#3b82f6",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: !file || isUploading ? "not-allowed" : "pointer",
              opacity: !file || isUploading ? 0.6 : 1,
            }}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </div>
        {uploadStatus && <p style={{ marginTop: "12px", color: "#9fffc3" }}>{uploadStatus}</p>}
      </section>

      <section
        style={{
          background: "rgba(12,16,34,0.85)",
          borderRadius: "12px",
          padding: "20px",
          border: "1px solid rgba(120,140,220,0.2)",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "12px" }}>Quick Add via JSON API</h3>
        <p style={{ marginTop: 0, color: "#9db5ff" }}>
          Use the backend's <code>/upload_json</code> endpoint to register a single star with optional model features.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>Identifier *</span>
            <input
              type="text"
              value={quickStar.id}
              onChange={(event) => setQuickStar((prev) => ({ ...prev, id: event.target.value }))}
              placeholder="e.g. KIC-8478994"
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid rgba(120,140,220,0.35)" }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>Right Ascension (deg)</span>
            <input
              type="number"
              value={quickStar.ra}
              onChange={(event) => setQuickStar((prev) => ({ ...prev, ra: event.target.value }))}
              placeholder="e.g. 289.123"
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid rgba(120,140,220,0.35)" }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>Declination (deg)</span>
            <input
              type="number"
              value={quickStar.dec}
              onChange={(event) => setQuickStar((prev) => ({ ...prev, dec: event.target.value }))}
              placeholder="e.g. 42.77"
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid rgba(120,140,220,0.35)" }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>Display Name</span>
            <input
              type="text"
              value={quickStar.name}
              onChange={(event) => setQuickStar((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Optional descriptive name"
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid rgba(120,140,220,0.35)" }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>Status / Disposition</span>
            <input
              type="text"
              value={quickStar.status}
              onChange={(event) => setQuickStar((prev) => ({ ...prev, status: event.target.value }))}
              placeholder="e.g. Candidate"
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid rgba(120,140,220,0.35)" }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>Model Features</span>
            <textarea
              value={quickStar.features}
              onChange={(event) => setQuickStar((prev) => ({ ...prev, features: event.target.value }))}
              placeholder={numericPlaceholder}
              rows={3}
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid rgba(120,140,220,0.35)" }}
            />
          </label>
        </div>
        <button
          type="button"
          onClick={handleQuickSubmit}
          disabled={isSaving}
          style={{
            marginTop: "16px",
            padding: "8px 16px",
            background: "#22c55e",
            border: "none",
            borderRadius: "6px",
            color: "white",
            cursor: isSaving ? "not-allowed" : "pointer",
            opacity: isSaving ? 0.6 : 1,
          }}
        >
          {isSaving ? "Saving..." : "Add Star"}
        </button>
        {quickStatus && (
          <p style={{ marginTop: "12px", color: quickStatus.startsWith("Save failed") ? "#ff8080" : "#9fffc3" }}>
            {quickStatus}
          </p>
        )}
      </section>

      <section style={{ marginTop: "28px", color: "#9db5ff" }}>
        <h4 style={{ marginBottom: "8px" }}>Current catalog size</h4>
        <p style={{ margin: 0 }}>{stars.length.toLocaleString()} stars available in the visualization.</p>
      </section>
    </div>
  );
}
