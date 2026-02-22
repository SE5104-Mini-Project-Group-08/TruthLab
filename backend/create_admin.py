from flask_bcrypt import Bcrypt
from models import users_collection

bcrypt = Bcrypt()

password = bcrypt.generate_password_hash("admin123").decode("utf-8")

users_collection.insert_one({
    "full_name": "Admin",
    "email": "admin@truthlab.com",
    "password": password,
    "role": "admin"
})

print("✅ Admin user created successfully")
