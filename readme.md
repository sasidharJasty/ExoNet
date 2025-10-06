<div align="center">

# 🌌 Exoplanet Starfield Explorer

An immersive React + Three.js front-end paired with a FastAPI backend that lets you **explore, classify, and explain** exoplanet candidates in real time.

**Built by the ExoNet collective — a team of innovators blending space science, AI, and design to make exoplanet discovery smarter and more inspiring.**

We combine machine learning researchers, astrophysicists, and storytellers to transform NASA’s open exoplanet archives into accessible, interactive experiences. ExoNet’s mission is to accelerate automated planet detection while igniting curiosity about worlds beyond our own.

> 💡 **Join us!** We’re actively looking for collaborators in ML/AI, data engineering, frontend/web experiences, and science communication. If you love turning cosmic data into vivid insights, this project is for you.

</div>

---

## 🚀 Challenge Motivation

NASA’s space-based surveys (Kepler, K2, TESS, and more) have uncovered thousands of exoplanets, yet many were flagged manually. With modern AI/ML, we can process these immense catalogs automatically to reveal new worlds faster. ExoNet is our response to NASA’s Astrophysics Division challenge: **train models on open-source exoplanet datasets, analyze incoming observations, and accurately identify planetary candidates**. This repository packages the data pipelines, models, and visualization layer that power that vision.

Use it as a launchpad to prototype new detection strategies, incorporate additional missions, or craft compelling narratives around breakthrough discoveries.

---

## ✨ Highlights

- **Interactive starfield** rendered with Three.js; you start inside the Kepler/TESS sphere and can orbit freely.
- **Right-click navigation** opens a dedicated star page with animated orbits, rich metadata, and explainability visuals.
- **Dual AI tooling**: classification via XGBoost + SHAP and a secondary habitability meta-model.
- **Research-friendly uploads**: add new observations through CSV or JSON feeds directly from the UI.
- **Auto-generated SHAP plots** for both classification and habitability predictions, served straight from the backend.
- **Health awareness**: frontend navbar pings the API so you always know when the backend is live.

---

## 🗺️ Project Structure

```
frontend/   React 19 + Vite + Three.js UI (starfield, detail pages, uploads)
backend/    FastAPI service with model inference, SHAP generation, catalog ingestion
backend/Model/  packaged models, scalers, CSV catalogs, SHAP artifact directory
```

Key front-end pages/components:

- `src/components/StarField.jsx` – renders the star sphere, handles hover + right-click navigation.
- `src/pages/StarDetails.jsx` – full-page planetary system, classification + habitability UI, SHAP imagery.
- `src/pages/Upload.jsx` – CSV uploader and quick JSON submission form.
- `src/components/Navbar.jsx` – navigation + backend heartbeat status.

Key backend modules:

- `backend/main.py` – FastAPI app, catalog unification, inference endpoints, SHAP generation.
- `backend/Model/` – includes `xgb_tabular.joblib`, `meta_logreg.joblib`, `scaler_robust.joblib`, unified CSV catalogs, static image outputs.

---

## 🚀 Quick Start

> Requirements: Node.js ≥ 18, Python 3.11 (virtualenv available in `env/`), and npm/pip installed.

### 1. Backend (FastAPI)

```bash
cd backend
../env/bin/uvicorn backend.main:app --reload
```

The backend will automatically ensure catalog CSVs exist (downloading if necessary), load the XGBoost classifier and habitability meta-model, and expose the API at `http://127.0.0.1:8000` by default.

### 2. Frontend (Vite + React)

```bash
cd frontend
npm install
npm run dev
```

Visit the printed URL (typically `http://127.0.0.1:5173`). The navbar indicator should turn green when the backend is reachable.

---

## 🛰️ Using the App

### Explore the Starfield

- Hover to see quick info about each star.
- Right-click a star to open its detailed system view.
- Toggle color modes between **mission-coded** (Kepler, K2, TESS) and **feature-based** gradients.
- Filter by feature value ranges when in feature mode to isolate interesting subsets.

### Star Details Page

- Animated planetary orbits with ambient space background.
- Full metadata table (RA/Dec, period, transit depth, mission, catalog source, etc.).
- **Run Classification**: calls `/classify`, displays model code, and refreshes the SHAP summary plot.
- **Run Habitability**: executes the habitability meta-model, returns probability + label, engineered feature table, and SHAP visualization.
- Back button adapts to history stack or falls back to the starfield.

### Upload New Data

- **CSV upload**: accepts files with columns similar to the unified catalogs; missing numeric values are filled and sign-corrected server-side.
- **Quick JSON**: post a single star via a tidy JSON form.
- Newly added data becomes immediately available to the starfield after the next fetch cycle.

---

## 🔌 API Reference (Backend)

| Method | Path                | Description |
|--------|---------------------|-------------|
| GET    | `/ping`             | Health check used by the navbar.
| GET    | `/stars`            | Returns the unified catalog (mission, target_id, RA/Dec, features).
| GET    | `/star/{id}`        | Lookup a single star by target ID.
| POST   | `/upload_json`      | Append a JSON star payload.
| POST   | `/upload_csv`       | Upload a CSV file; new rows merge into the catalog.
| POST   | `/classify`         | Run XGBoost classification, returning `{prediction, shap_image}`.
| POST   | `/habitability`     | Compute habitability score & SHAP based on meta-model.
| GET    | `/shap/{star_id}.png` | Serve classification SHAP plot.
| GET    | `/shap/habitability/{star_id}_habitability.png` | Serve habitability SHAP plot.

Payload expectations:

- `/classify` expects a `Star` body with `id`, `ra`, `dec`, `name` (string), and a 13-value `features` array matching the classifier vector defined in `StarDetails.jsx`.
- `/habitability` accepts the same base measurements plus optional mission metadata and either uses engineered features or cascaded classifier probabilities (supplied automatically by the frontend).

SHAP images are written under `backend/Model/static/` and cached for subsequent requests.

---

## 🧠 Models & Explainability

- **Classifier**: XGBoost multi-class model trained offline; stored at `Model/xgb_tabular.joblib`.
- **Habitability meta-model**: Logistic regression (meta stacking) using classifier probabilities and engineered features.
- **Explainers**: SHAP (TreeExplainer for XGBoost, Explainer API for the meta-model). Matplotlib is forced into the headless `Agg` backend to avoid macOS windowing issues.
- **Static assets**: Generated plots are accessible via REST endpoints and displayed inline in the UI.

To swap in your own models:

1. Replace the joblib artifacts in `backend/Model/`.
2. Ensure feature order matches the frontend’s vector builder.
3. Restart the backend to reload weights.

### 🔬 XGBoost Module Structure

The classifier is packaged as `xgb_tabular.joblib`, which contains an `xgboost.XGBClassifier` trained on a unified feature space. Several supporting artifacts live alongside it:

| File | Purpose |
|------|---------|
| `xgb_tabular.joblib` | Main multi-class classifier predicting disposition codes. |
| `scaler_robust.joblib` | `sklearn.preprocessing.RobustScaler` used when the model was trained; useful for reproducing feature scaling. |
| `meta_logreg.joblib` | Logistic regression habitability meta-model consuming the classifier’s probability outputs. |
| `cnn_phase_best.pth` / `phase_folded_data.npz` | Optional CNN artefacts for phase-folded light curves (not wired into the current UI but available for future expansion). |
| `shap_*.png` | Cached SHAP plots for quick retrieval. |

Within the backend, the classifier is loaded via `joblib.load(MODEL_PATH)` and wrapped with a global SHAP `TreeExplainer`. Key helper functions:

- `buildFeatureVector` (frontend) ensures a consistent 13-length numeric input.
- `generate_shap_image` (backend) uses `explainer.shap_values` + `shap.summary_plot` to produce `/shap/{id}.png`.
- `predict_habitability_scores` synthesizes classifier probabilities (`model.predict_proba`) into the habitability stack when required.

Feature vector slots (ordered):

1. Orbital period (days)
2. Transit duration (hours)
3. Transit depth (ppm)
4. Planet radius (Earth radii)
5. Stellar radius (Solar radii)
6. Stellar effective temperature (K)
7. Stellar surface gravity (log g)
8. Signal-to-noise ratio
9. Right Ascension
10. Declination
11. Mission code (one-hot encoded numeric)
12. Disposition code (encoded string → numeric)
13. Source catalog code

These align with the original training pipeline and must be preserved if you retrain. When extending the model:

- Update `CLASSIFIER_FEATURES` and `buildFeatureVector` to reflect new inputs.
- Refresh any downstream encoders (mission/disposition/source) to match the training vocabulary.
- Regenerate SHAP explanations to verify feature importance still makes sense.

---

## 🧱 Data Pipelines

The backend harmonizes three public catalogs on startup:

- `kepler_koi.csv`
- `pscomppars.csv`
- `tess_toi.csv`

Each catalog passes through a `unify_*` function that standardizes fields into the schema consumed by the frontend and models. A helper replaces zero/negative numeric values with statistically similar draws to avoid division-by-zero or log failures.

Custom uploads follow the same fill strategy so downstream computations remain stable.

---

## 🧪 Development Tips

- When iterating on backend classifications or SHAP visuals, run `uvicorn backend.main:app --reload` so changes persist immediately.
- For the frontend, `npm run dev` offers hot module replacement; rebuild (`npm run build`) before deploying.
- Use the included Python virtual environment (`env/`) to ensure dependency parity. Activate it via `source env/bin/activate` (bash/zsh) or run binaries directly (`env/bin/python`).
- SHAP installs can be slow on fresh machines; ensure you have a working C++ toolchain if rebuilding from scratch.

---

## 🧭 Roadmap Ideas

- Add bookmarking/favoriting inside the starfield UI.
- Support multi-object selection and comparison overlays.
- Extend API to stream time-series light curve snippets along with metadata.
- Package Docker compose for one-command spin-up.

Contributions and issues are welcome. Feel free to tailor the models, color mappings, or UI interactions for your own research or educational uses!

---

## 📄 License

This project is shared for educational and research purposes. Adapt or extend under your preferred licensing terms.




