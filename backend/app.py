from flask import Flask, request, jsonify
from datetime import timedelta
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["JWT_SECRET_KEY"] = "super-secret-key"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=2)

jwt = JWTManager(app)

# Initialize extensions that require app context
bcrypt.init_app(app)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)
