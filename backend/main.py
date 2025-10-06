from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Optional
import pandas as pd
import numpy as np
import joblib, shap, os, uuid, requests
from pathlib import Path
from fastapi.staticfiles import StaticFiles
# Use a headless backend so Matplotlib can render figures in worker threads.
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib as mpl
import xgboost as xgb

# ------------------------------
# Paths & directories
# ------------------------------
ROOT = Path("backend")
DATA_DIR = ROOT / "Model"
STATIC_DIR = DATA_DIR / "static"
STATIC_DIR.mkdir(parents=True, exist_ok=True)
MODEL_PATH = DATA_DIR / "xgb_tabular.joblib"
HAB_STATIC_DIR = STATIC_DIR / "habitability"
HAB_STATIC_DIR.mkdir(parents=True, exist_ok=True)
HAB_MODEL_PATH = DATA_DIR / "meta_logreg.joblib"
HAB_SCALER_PATH = DATA_DIR / "scaler_robust.joblib"

TARGET_LABELS = {0: "Non-Habitable", 1: "Potentially Habitable"}

# Names used by the tabular classifier. Keep in sync with frontend CLASSIFIER_FEATURES.
CLASSIFIER_FEATURE_NAMES = [
    "period_days",
    "transit_duration_hours",
    "depth_ppm",
    "planet_radius_re",
    "stellar_radius_rs",
    "stellar_teff_k",
    "stellar_logg",
    "snr",
    "ra",
    "dec",
    "mission_code",
    "disposition_code",
    "source_code",
]

# ------------------------------
# FastAPI app
# ------------------------------
app = FastAPI(
    title="Exoplanet Starfield Backend",
    description="Backend for exoplanet visualization + XGBoost classification with SHAP explainability.",
    version="0.4"
)
# Allow CORS from all origins (for dev)
origins = [
    "https://exo-net.vercel.app",
    "https://www.exo-net.vercel.app"  # add any variants you use
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,       # set True if you send cookies / auth
    allow_methods=["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# ------------------------------
# Download CSV helper
# ------------------------------
def download_csv(url, out_path):
    if not out_path.exists():
        print(f"Downloading {url} to {out_path} ...")
        r = requests.get(url, timeout=60)
        r.raise_for_status()
        with open(out_path, "wb") as f:
            f.write(r.content)
        print("Saved.")
    else:
        print(f"{out_path} already exists, skipping.")

# ------------------------------
# Star catalogs
# ------------------------------
koi_path = DATA_DIR / "kepler_koi.csv"
ps_path = DATA_DIR / "pscomppars.csv"
toi_path = DATA_DIR / "tess_toi.csv"

# `download_csv(
#     "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+kepler.koi+&format=csv",
#     koi_path
# )
# download_csv(
#     "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+pscomppars&format=csv",
#    ps_path
#)
#download_csv(
#    "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+tmstoi&format=csv",
#    toi_path
#)

# ------------------------------
# Unify functions
# ------------------------------
def unify_koi(df):
    df = df.fillna(0)
    return pd.DataFrame({
        "mission": ["KEPLER"]*len(df),
        "target_id": df.get("kepoi_name", df.get("kepid", [0]*len(df))),
        "ra": df.get("ra", 0),
        "dec": df.get("dec", 0),
        "period_days": df.get("koi_period", 0),
        "transit_duration_hours": df.get("koi_duration", 0),
        "depth_ppm": df.get("koi_depth", 0),
        "planet_radius_re": df.get("koi_prad", 0),
        "stellar_radius_rs": df.get("koi_srad", 0),
        "stellar_teff_k": df.get("koi_steff", 0),
        "stellar_logg": df.get("koi_slogg", 0),
        "snr": df.get("koi_model_snr", 0),
        "disposition": df.get("koi_disposition", ""),
        "source": ["kepler_koi"]*len(df)
    })

def unify_pscomp(df):
    df = df.fillna(0)
    def detect_mission(name):
        if isinstance(name, str):
            if name.startswith("K2-"): return "K2"
            if name.startswith("Kepler-") or name.startswith("KOI-"): return "KEPLER"
            if name.startswith("TOI"): return "TESS"
        return "UNKNOWN"
    names = df.get("pl_name", ["UNKNOWN"]*len(df))
    return pd.DataFrame({
        "mission": [detect_mission(n) for n in names],
        "target_id": df.get("pl_name", df.get("pl_hostname", ["UNKNOWN"]*len(df))),
        "ra": df.get("ra", 0),
        "dec": df.get("dec", 0),
        "period_days": df.get("pl_orbper", 0),
        "transit_duration_hours": df.get("pl_trandur", 0),
        "depth_ppm": df.get("pl_trandep", 0),
        "planet_radius_re": df.get("pl_rade", df.get("pl_radj", 0)),
        "stellar_radius_rs": df.get("st_rad", 0),
        "stellar_teff_k": df.get("st_teff", 0),
        "stellar_logg": df.get("st_logg", 0),
        "snr": df.get("pl_rvflag", 0),
        "disposition": df.get("pl_discmethod", ""),
        "source": ["pscomppars"]*len(df)
    })

def unify_toi(df):
    df = df.fillna(0)
    return pd.DataFrame({
        "mission": ["TESS"]*len(df),
        "target_id": df.get("toi", df.get("tic_id", 0)),
        "ra": df.get("ra", 0),
        "dec": df.get("dec", 0),
        "period_days": df.get("period", df.get("orbital_period", 0)),
        "transit_duration_hours": df.get("duration_hours", df.get("duration", 0)),
        "depth_ppm": df.get("depth", 0),
        "planet_radius_re": df.get("planet_radius", df.get("radius", 0)),
        "stellar_radius_rs": df.get("stellar_radius", 0),
        "stellar_teff_k": df.get("stellar_teff", 0),
        "stellar_logg": df.get("stellar_logg", 0),
        "snr": df.get("snr", 0),
        "disposition": df.get("tfopwg_disposition", df.get("disposition", "")),
        "source": ["tess_toi"]*len(df)
    })

def replace_zeros_with_random(df, exclude_cols=None):
    rng = np.random.default_rng()
    exclude = {c.lower() for c in (exclude_cols or [])}
    for col in df.columns:
        if col.lower() in exclude:
            continue
        if not np.issubdtype(df[col].dtype, np.number):
            continue
        df.loc[:, col] = df[col].abs()
        non_zero = df.loc[df[col] != 0, col]
        if non_zero.empty:
            continue
        mean = non_zero.mean()
        std = non_zero.std(ddof=0)
        mask = df[col] == 0
        if not mask.any():
            continue
        if not np.isfinite(std) or std == 0:
            replacement = np.full(mask.sum(), mean)
        else:
            replacement = rng.normal(mean, std, mask.sum())
        replacement = np.abs(replacement)
        df.loc[mask, col] = replacement
        df.loc[:, col] = df[col].abs()
    return df

# Load & unify
# Prefer a pre-built combined catalog if present. This makes container
# initialization faster and avoids reading multiple large CSVs during startup.
combined_path = DATA_DIR / "combined_catalog.csv"
if combined_path.exists():
    combined = pd.read_csv(combined_path, low_memory=False).fillna(0)
else:
    koi_unified = unify_koi(pd.read_csv(koi_path, low_memory=False))
    ps_unified = unify_pscomp(pd.read_csv(ps_path, low_memory=False))
    toi_unified = unify_toi(pd.read_csv(toi_path, low_memory=False))
    combined = pd.concat([koi_unified, ps_unified, toi_unified], ignore_index=True, sort=False)
    replace_zeros_with_random(combined, exclude_cols={"ra", "dec", "disposition"})
    # Persist for future runs
    combined.to_csv(combined_path, index=False)

stars = combined.to_dict(orient="records")  # JSON-serializable

# ------------------------------
# Load or create model
# ------------------------------
if MODEL_PATH.exists():
    model = joblib.load(MODEL_PATH)
else:
    X = np.random.rand(50, 4)
    y = np.random.randint(0, 3, 50)
    model = xgb.XGBClassifier().fit(X, y)
    joblib.dump(model, MODEL_PATH)

explainer = shap.TreeExplainer(model)
CLASSIFIER_MODEL = model

if HAB_MODEL_PATH.exists():
    habitability_model = joblib.load(HAB_MODEL_PATH)
else:
    habitability_model = None

if HAB_SCALER_PATH.exists():
    habitability_scaler = joblib.load(HAB_SCALER_PATH)
else:
    habitability_scaler = None

try:
    habitability_explainer = shap.Explainer(habitability_model) if habitability_model is not None else None
except Exception as exc:
    print(f"Failed to initialize habitability explainer: {exc}")
    habitability_explainer = None

# ------------------------------
# Schemas
# ------------------------------
class Star(BaseModel):
    id: str
    ra: float
    dec: float
    name: Optional[str] = None
    status: Optional[str] = None
    features: Optional[List[float]] = None

class StarsBatch(BaseModel):
    stars: List[Star]

class HabitabilityInput(BaseModel):
    id: str
    period_days: Optional[float] = None
    transit_duration_hours: Optional[float] = None
    depth_ppm: Optional[float] = None
    planet_radius_re: Optional[float] = None
    stellar_radius_rs: Optional[float] = None
    stellar_teff_k: Optional[float] = None
    stellar_logg: Optional[float] = None
    snr: Optional[float] = None
    ra: Optional[float] = None
    dec: Optional[float] = None
    insolation_flux: Optional[float] = None
    equilibrium_temp_k: Optional[float] = None
    mission: Optional[str] = None
    source: Optional[str] = None
    status: Optional[str] = None
    classification_features: Optional[List[float]] = None
# ------------------------------
# Helper
# ------------------------------
def generate_shap_image(features: List[float], star_id: str, plot_type="summary"):
    X = np.array(features).reshape(1, -1)
    safe_id = _safe_star_key(star_id)
    shap_path = STATIC_DIR / f"{safe_id}.png"
    try:
        # Prefer the Explanation API which is more consistent across model types
        # Provide a DataFrame with feature names so SHAP plots use labels instead of numeric indices.
        n_features = X.shape[1]
        if n_features == len(CLASSIFIER_FEATURE_NAMES):
            df = pd.DataFrame(X, columns=CLASSIFIER_FEATURE_NAMES)
        else:
            # If lengths mismatch, attempt to reuse known names and append generic names for extras
            cols = CLASSIFIER_FEATURE_NAMES[:n_features] if n_features <= len(CLASSIFIER_FEATURE_NAMES) else (
                CLASSIFIER_FEATURE_NAMES + [f"f{i}" for i in range(n_features - len(CLASSIFIER_FEATURE_NAMES))]
            )
            df = pd.DataFrame(X, columns=cols)

        explanation = explainer(df)

        # Use a consistent, high-contrast diverging colormap for SHAP
        # Do NOT override the axes.prop_cycle (SHAP relies on default cycles); only set the colormap and background
        with mpl.rc_context({
            "figure.facecolor": "white",
            "axes.facecolor": "white",
            "image.cmap": "RdBu",
        }):
            plt.figure(figsize=(8, 4))

            # If the explainer returns multi-output (e.g. multiclass), select the predicted class
            try:
                vals = getattr(explanation, "values", None)
                if vals is not None and getattr(vals, "ndim", 1) == 3:
                    # shape (n_samples, n_outputs, n_features)
                    pred_class = int(CLASSIFIER_MODEL.predict(X)[0]) if CLASSIFIER_MODEL is not None else 0
                    sel = explanation[0][pred_class]
                else:
                    sel = explanation[0]
            except Exception:
                sel = explanation[0]

            # For a single-sample explanation prefer a waterfall plot (clear contribution per feature)
            try:
                # Waterfall uses diverging colors to show positive/negative contributions
                shap.plots.waterfall(sel, show=False)
            except Exception:
                # Fall back to a horizontal bar importance plot when waterfall isn't available
                try:
                    shap.summary_plot(explanation, X, show=False, plot_type="bar", max_display=20, cmap="RdBu")
                except Exception:
                    shap.summary_plot(explanation, X, show=False, cmap="RdBu")

            plt.savefig(shap_path, bbox_inches="tight")
            plt.close()
    except Exception as e:
        plt.figure(figsize=(6, 2))
        plt.text(0.5, 0.5, f"SHAP failed\n{e}", ha="center", va="center")
        plt.axis("off")
        plt.savefig(shap_path, bbox_inches="tight")
        plt.close()
    return f"/static/{safe_id}.png"


def _safe_star_key(value: str) -> str:
    cleaned = ''.join(ch if ch.isalnum() or ch in {'-', '_'} else '_' for ch in str(value))
    return cleaned or "star"


def reconstruct_habitability_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    if "log_period" not in df.columns and "period_days" in df.columns:
        df["log_period"] = np.log1p(df["period_days"])
    if "log_radius" not in df.columns and "planet_radius_re" in df.columns:
        df["log_radius"] = np.log1p(df["planet_radius_re"])
    if "depth_over_duration" not in df.columns and all(col in df.columns for col in ("depth_ppm", "transit_duration_hours")):
        df["depth_over_duration"] = df["depth_ppm"] / (df["transit_duration_hours"] + 1e-6)
    if "log_snr" not in df.columns and "snr" in df.columns:
        df["log_snr"] = np.log1p(df["snr"])
    if "density_ratio" not in df.columns and all(col in df.columns for col in ("planet_radius_re", "stellar_radius_rs")):
        df["density_ratio"] = df["planet_radius_re"] / (df["stellar_radius_rs"] + 1e-6)
    return df.fillna(0.0)


def _to_finite_number(value: Optional[float]) -> float:
    if value is None:
        return 0.0
    try:
        numeric = float(value)
    except (TypeError, ValueError):
        return 0.0
    if not np.isfinite(numeric):
        return 0.0
    return float(numeric)


def prepare_habitability_frame(payload: HabitabilityInput) -> tuple[pd.DataFrame, pd.DataFrame]:
    numeric_fields = {
        "period_days": _to_finite_number(payload.period_days),
        "transit_duration_hours": _to_finite_number(payload.transit_duration_hours),
        "depth_ppm": _to_finite_number(payload.depth_ppm),
        "planet_radius_re": _to_finite_number(payload.planet_radius_re),
        "stellar_radius_rs": _to_finite_number(payload.stellar_radius_rs),
        "stellar_teff_k": _to_finite_number(payload.stellar_teff_k),
        "stellar_logg": _to_finite_number(payload.stellar_logg),
        "snr": _to_finite_number(payload.snr),
        "ra": _to_finite_number(payload.ra),
        "dec": _to_finite_number(payload.dec),
        "insolation_flux": _to_finite_number(payload.insolation_flux),
        "equilibrium_temp_k": _to_finite_number(payload.equilibrium_temp_k),
    }
    base_df = pd.DataFrame([numeric_fields])
    engineered_df = reconstruct_habitability_features(base_df)
    return base_df, engineered_df


def predict_habitability_scores(
    habit_model,
    scaler,
    df: pd.DataFrame,
    classification_features: Optional[List[float]] = None,
):
    feature_names = list(getattr(habit_model, "feature_names_in_", [])) if habit_model is not None else []
    uses_meta_probs = bool(feature_names) and all(name.startswith("xgb_prob_") for name in feature_names)

    if uses_meta_probs:
        if classification_features is None:
            raise ValueError("classification_features are required for meta-model habitability predictions")
        classification_array = np.array(classification_features, dtype=float).reshape(1, -1)
        base_probs = CLASSIFIER_MODEL.predict_proba(classification_array)[0]
        meta_features = {
            name: float(base_probs[int(name.split("_")[-1])])
            for name in feature_names
        }
        X_scaled_df = pd.DataFrame([meta_features])
        processed = X_scaled_df.copy()
    else:
        processed = df.copy()
        scaler_cols = getattr(scaler, "feature_names_in_", []) if scaler is not None else []
        if scaler is not None and hasattr(scaler, "transform"):
            if len(scaler_cols) == 0:
                scaler_cols = list(processed.columns)
            scaled_input = pd.DataFrame({col: processed[col] if col in processed.columns else 0.0 for col in scaler_cols}, index=processed.index)
            scaled_input = scaled_input.fillna(0.0)
            scaled_values = scaler.transform(scaled_input.values)
            X_scaled_df = pd.DataFrame(scaled_values, columns=scaler_cols, index=processed.index)
            for extra_col in ["log_snr", "density_ratio"]:
                if extra_col not in X_scaled_df.columns and extra_col in processed.columns:
                    X_scaled_df[extra_col] = processed[extra_col]
        else:
            X_scaled_df = processed

    try:
        probs = habit_model.predict_proba(X_scaled_df.values)[:, 1]
    except Exception as exc:
        print(f"predict_proba failed ({exc}); falling back to predict")
        preds = habit_model.predict(X_scaled_df.values)
        if preds.ndim == 1:
            probs = preds
        else:
            probs = preds[:, 1]

    preds_binary = (probs >= 0.5).astype(int)
    results = pd.DataFrame({
        "Habitability_Score": probs,
        "Prediction": [TARGET_LABELS.get(label, str(label)) for label in preds_binary],
    }, index=X_scaled_df.index)
    return results, X_scaled_df, processed


def generate_habitability_shap_image(X_scaled_df: pd.DataFrame, star_id: str):
    if X_scaled_df.empty:
        return None
    filename = f"{_safe_star_key(star_id)}_habitability.png"
    shap_path = HAB_STATIC_DIR / filename
    try:
        # Build an Explanation and prefer a bar-summary for the engineered feature importances
        if habitability_explainer is not None:
            explanation = habitability_explainer(X_scaled_df)
        elif habitability_model is not None:
            explanation = shap.Explainer(habitability_model, X_scaled_df)(X_scaled_df)
        else:
            raise RuntimeError("Habitability model unavailable")

        # Use consistent colors for habitability plots as well
        with mpl.rc_context({
            "figure.facecolor": "white",
            "axes.facecolor": "white",
            "image.cmap": "RdBu",
        }):
            plt.figure(figsize=(10, 5))
            try:
                # Bar plot of mean absolute SHAP values (best for showing feature importance)
                shap.summary_plot(explanation, X_scaled_df, show=False, plot_type="bar", max_display=25, cmap="RdBu")
            except Exception:
                # Fallback to the standard summary plot
                shap.summary_plot(explanation, X_scaled_df, show=False, cmap="RdBu")
            plt.title("Habitability Feature Importance")
            plt.savefig(shap_path, bbox_inches="tight")
            plt.close()
    except Exception as exc:
        plt.figure(figsize=(6, 2))
        plt.text(0.5, 0.5, f"SHAP failed\n{exc}", ha="center", va="center")
        plt.axis("off")
        plt.savefig(shap_path, bbox_inches="tight")
        plt.close()
    return f"/static/habitability/{filename}"

# ------------------------------
# Routes
# ------------------------------
@app.get("/ping")
def ping(): 
    return {"message": "pong"}

@app.get("/stars")
def get_stars(): 
    return stars

@app.get("/star/{star_id}")
def get_star(star_id: str):
    for s in stars:
        if str(s.get("target_id")) == star_id:
            return s
    return {"error": "not found"}

@app.post("/upload_json")
def upload_json(star: Star):
    stars.append(star.dict())
    return star

@app.post("/upload_csv")
async def upload_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)
    new = df.fillna(0).to_dict(orient="records")
    stars.extend(new)
    return {"added": len(new)}


@app.post("/habitability")
def habitability(payload: HabitabilityInput):
    if habitability_model is None:
        return {"error": "Habitability model unavailable"}

    raw_df, engineered_df = prepare_habitability_frame(payload)
    try:
        results, X_scaled_df, processed_df = predict_habitability_scores(
            habitability_model,
            habitability_scaler,
            engineered_df,
            classification_features=payload.classification_features,
        )
    except ValueError as exc:
        return {"error": str(exc)}
    record = results.iloc[0]

    shap_image = generate_habitability_shap_image(X_scaled_df, payload.id)
    scaled_features = {
        column: float(X_scaled_df.iloc[0][column]) if np.isfinite(X_scaled_df.iloc[0][column]) else 0.0
        for column in X_scaled_df.columns
    }

    raw_features = {
        column: float(raw_df.iloc[0][column]) if np.isfinite(raw_df.iloc[0][column]) else 0.0
        for column in raw_df.columns
    }

    engineered_features = {
        column: float(processed_df.iloc[0][column]) if np.isfinite(processed_df.iloc[0][column]) else 0.0
        for column in processed_df.columns
    }

    response = {
        "id": payload.id,
        "score": float(record["Habitability_Score"]),
        "label": record["Prediction"],
        "features": scaled_features,
        "raw_features": raw_features,
        "engineered_features": engineered_features,
    }
    if shap_image:
        response["shap_image"] = shap_image
    return response

@app.post("/classify")
def classify(star: Star):
    if not star.features:
        return {"error": "No features provided"}
    pred = int(model.predict(np.array(star.features).reshape(1,-1))[0])
    shap_img = generate_shap_image(star.features, star.id)
    return {"prediction": pred, "shap_image": shap_img}
