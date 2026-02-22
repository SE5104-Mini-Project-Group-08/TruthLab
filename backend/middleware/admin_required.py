from flask_jwt_extended import verify_jwt_in_request, get_jwt
from flask import jsonify

def admin_required():
    verify_jwt_in_request()
    claims = get_jwt()
    if claims.get("role") != "admin":
        return jsonify({"error": "Admin only access"}), 403
