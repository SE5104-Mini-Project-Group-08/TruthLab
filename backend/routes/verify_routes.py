from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
import joblib
from flask_jwt_extended import jwt_required, get_jwt_identity
import requests
from bs4 import BeautifulSoup

from utils.text_cleaner import clean_text
from models import verifications_collection, users_collection
from datetime import datetime

verify_bp = Blueprint("verify", __name__)

# Load trained model and vectorizer
model = joblib.load("model/fake_news_model.pkl")
vectorizer = joblib.load("model/tfidf_vectorizer.pkl")

@verify_bp.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "Fake News API running"}), 200


@verify_bp.route("/predict", methods=["POST"])
@jwt_required(optional=True)
def predict():
    data = request.get_json() or {}

    raw_text = None
    source_url = None

    # If a URL is provided, fetch and extract article text
    if data.get("url"):
        source_url = data.get("url")
        try:
            resp = requests.get(source_url, timeout=8, headers={"User-Agent": "Mozilla/5.0"})
            resp.raise_for_status()
            html = resp.text
            # Try to extract main article text
            soup = BeautifulSoup(html, "html.parser")
            article = None
            # prefer <article> or <main>
            if soup.article:
                article = soup.article
            elif soup.find("main"):
                article = soup.find("main")

            if article:
                paragraphs = [p.get_text(separator=" ", strip=True) for p in article.find_all("p")]
                raw_text = "\n\n".join(p for p in paragraphs if p)
            else:
                # fallback: collect all <p> tags and choose the longest contiguous block
                paragraphs = [p.get_text(separator=" ", strip=True) for p in soup.find_all("p")]
                raw_text = "\n\n".join(p for p in paragraphs if p)

            if not raw_text or len(raw_text.strip()) < 50:
                # as last resort, use page title and meta description
                title = soup.title.string if soup.title else ""
                desc = ""
                md = soup.find("meta", attrs={"name": "description"}) or soup.find("meta", attrs={"property": "og:description"})
                if md and md.get("content"):
                    desc = md.get("content")
                raw_text = (title + "\n" + desc).strip()
        except Exception as e:
            return jsonify({"error": f"Failed to fetch URL: {str(e)}"}), 400
    else:
        # Expect direct text
        if not data.get("text"):
            return jsonify({"error": "Text or url field is required"}), 400
        raw_text = data.get("text")

    cleaned_text = clean_text(raw_text or "")

    vectorized_text = vectorizer.transform([cleaned_text])

    prediction = model.predict(vectorized_text)[0]
    confidence = model.predict_proba(vectorized_text)[0].max()

    response = {
        "prediction": "REAL" if prediction == 1 else "FAKE",
        "confidence": round(float(confidence), 2)
    }

    return jsonify(response), 200


