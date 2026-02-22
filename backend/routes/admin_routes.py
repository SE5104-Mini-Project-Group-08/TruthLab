from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from middleware.admin_required import admin_required
from model.user_model import create_admin

admin_bp = Blueprint("admin", __name__)

@admin_bp.route("/dashboard")
@jwt_required()
def dashboard():
    admin_required()
    return jsonify({
        "users": users_collection.count_documents({}),
        "reports": 12,
        "status": "OK"
    })
