from flask import Blueprint, request, jsonify, current_app, redirect
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from models import users_collection
import os
import requests
from urllib.parse import urlencode, quote_plus

# optional local api_key file providing CLIENT_ID/CLIENT_SECRET as fallbacks
try:
    from api_key import CLIENT_ID as API_CLIENT_ID, CLIENT_SECRET as API_CLIENT_SECRET
except Exception:
    API_CLIENT_ID = "921182310953-kt6kt1nhkt560c61gj5vsmrqfbsjfk5d.apps.googleusercontent.com"
    API_CLIENT_SECRET = "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"

bcrypt = Bcrypt()
auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    full_name = data.get("full_name")
    email = data.get("email")
    password = data.get("password")

    if users_collection.find_one({"email": email}):
        return jsonify({"error": "Email already registered"}), 400

    hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8")
    users_collection.insert_one({
        "full_name": full_name,
        "email": email,
        "password": hashed_pw
    })

    return jsonify({"message": "User created successfully!"}), 201


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = users_collection.find_one({"email": email})

    if not user:
        return jsonify({"error": "User not found"}), 404

    if not bcrypt.check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid password"}), 401

    # Generate JWT token
    access_token = create_access_token(identity=email)

    return jsonify({
        "message": "Login successful",
        "access_token": access_token,
        "user": {
            "full_name": user["full_name"],
            "email": user["email"]
        }
    }), 200


@auth_bp.route("/google/login")
def google_login():
    """Redirect the user to Google's OAuth 2.0 server for authorization."""
    # prefer env vars, fall back to api_key module if present
    client_id = os.getenv("GOOGLE_CLIENT_ID") or API_CLIENT_ID
    frontend_url = os.environ.get("FRONTEND_URL", "http://localhost:3000")
    if not client_id:
        return jsonify({"error": "GOOGLE_CLIENT_ID not configured on server"}), 500

    redirect_uri = os.environ.get("GOOGLE_REDIRECT_URI", "http://127.0.0.1:5000/auth/google/callback")
    scope = "openid email profile"
    params = {
        "response_type": "code",
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "scope": scope,
        "access_type": "offline",
        "prompt": "consent",
    }
    auth_url = "https://accounts.google.com/o/oauth2/v2/auth?" + urlencode(params)
    return redirect(auth_url)


