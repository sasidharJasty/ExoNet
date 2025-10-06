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
    <div className="mt-4">
      <h3 className="font-bold mb-2">Upload CSV</h3>
      <input type="file" ref={fileRef} accept=".csv" className="mb-2"/>
      <button onClick={uploadCSV} className="bg-blue-500 text-white px-3 py-1 rounded">
        Upload
      </button>
    </div>
  );
}
