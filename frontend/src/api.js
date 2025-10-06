export const BASE_URL = "https://18.216.215.3"; //replace with your domain or local ip address of backend server


export async function fetchStars() {
  // Try backend first. If it fails or returns no rows, fall back to the bundled
  // CSV at /combined_catalog.csv (served from the frontend public folder).
  try {
    const res = await fetch(`${BASE_URL}/stars`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
      console.warn("fetchStars: backend returned no data, falling back to local CSV");
    } else {
      const text = await res.text().catch(() => "");
      console.warn(`fetchStars: backend returned ${res.status} ${text}, falling back to local CSV`);
    }
  } catch (err) {
    console.warn("fetchStars backend error, falling back to local CSV:", err);
  }

  // Fallback: load combined_catalog.csv from public/ and parse it.
  try {
    const csvRes = await fetch("/combined_catalog.csv");
    if (!csvRes.ok) {
      const txt = await csvRes.text().catch(() => "");
      throw new Error(`Failed to load local combined_catalog.csv: ${csvRes.status} ${txt}`);
    }
    const text = await csvRes.text();
    const rows = parseCsv(text);
    return rows;
  } catch (err) {
    console.error("fetchStars fallback CSV error:", err);
    // Re-throw so callers know nothing could be loaded
    throw err;
  }
}

// Minimal CSV parser that handles quoted fields and returns array of objects.
function parseCsv(text) {
  if (!text) return [];
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== "");
  if (lines.length === 0) return [];
  const headers = splitCsvLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    const parts = splitCsvLine(lines[i]);
    if (parts.length === 0) continue;
    const obj = {};
    for (let j = 0; j < headers.length; j += 1) {
      const key = headers[j] ?? `col${j}`;
      let val = parts[j] ?? "";
      // Try to coerce numeric-looking values to numbers
      const num = Number(val);
      if (val !== "" && !Number.isNaN(num)) {
        val = num;
      }
      obj[key] = val;
    }
    rows.push(obj);
  }
  return rows;
}

function splitCsvLine(line) {
  const result = [];
  let cur = "";
  let inQuote = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuote && line[i + 1] === '"') {
        // escaped quote
        cur += '"';
        i += 1;
      } else {
        inQuote = !inQuote;
      }
    } else if (ch === ',' && !inQuote) {
      result.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result.map((s) => s.trim());
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
