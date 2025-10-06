export const BASE_URL = "http://18.216.215.3:8000/";

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
    console.error("classifyStar error:", err);
    throw err;
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
    console.error("predictHabitability error:", err);
    throw err;
  }
}
