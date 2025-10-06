import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import StarDetails from "./pages/StarDetails";
import { fetchStars } from "./api";

export default function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    fetchStars().then(setStars).catch(console.error);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home stars={stars} />} />
        <Route path="/upload" element={<Upload stars={stars} setStars={setStars} />} />
        <Route path="/star/:id" element={<StarDetails stars={stars} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
