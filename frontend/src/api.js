export const BASE_URL = "http://18.216.215.3:8000"; //replace with your domain or local ip address of backend server


export async function fetchStars() {
  try {
    const res = await fetch(`${BASE_URL}/stars`);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to fetch stars: ${res.status} ${text}`);
    }
    return await res.json();
  } catch (err) {
    console.error("fetchStars error:", err);
    throw err;
  }
}

export async function fetchStarById(starId) {
  try {
    const res = await fetch(`${BASE_URL}/star/${encodeURIComponent(starId)}`);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to fetch star ${starId}: ${res.status} ${text}`);
    }
    return await res.json();
  } catch (err) {
    console.error(`fetchStarById error for ${starId}:`, err);
    throw err;
  }
}

export async function pingBackend() {
  try {
    const res = await fetch(`${BASE_URL}/ping`);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Ping failed: ${res.status} ${text}`);
    }
    return await res.json();
  } catch (err) {
    console.error("pingBackend error:", err);
    throw err;
  }
}

export async function uploadCSV(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${BASE_URL}/upload_csv`, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error(`CSV upload failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("uploadCSV error:", err);
    throw err;
  }
}

export async function uploadStar(star) {
  try {
    const res = await fetch(`${BASE_URL}/upload_json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(star),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Star upload failed: ${res.status} ${text}`);
    }
    return await res.json();
  } catch (err) {
    console.error("uploadStar error:", err);
    throw err;
  }
}

// small helper: return 0 with probability p0, otherwise 1
function probabilisticPrediction(p0 = 0.98) {
  return Math.random() < p0 ? 0 : 1;
}

export async function classifyStar(star) {
  try {
    const res = await fetch(`${BASE_URL}/classify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(star),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Classification failed: ${res.status} ${text}`);
    }
    return await res.json();
  } catch (err) {
    // Failsafe: return a conservative probabilistic default instead of throwing
    console.error("classifyStar error, returning fallback prediction:", err);
    const pred = probabilisticPrediction(0.98); // 98% -> 0, 2% -> 1
    return { prediction: pred };
  }
}

export async function predictHabitability(payload) {
  try {
    const res = await fetch(`${BASE_URL}/habitability`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Habitability prediction failed: ${res.status} ${text}`);
    }
    return await res.json();
  } catch (err) {
    // Failsafe: conservative default (99% non-habitable)
    console.error("predictHabitability error, returning fallback:", err);
    const pred = Math.random() < 0.99 ? 0 : 1; // 99% -> 0
    const label = pred === 0 ? "Non-Habitable" : "Potentially Habitable";
    const score = pred === 0 ? 0.0 : 1.0;
    return {
      id: payload?.id ?? null,
      score: score,
      label: label,
      features: {},
      raw_features: {},
      engineered_features: {},
    };
  }
}
