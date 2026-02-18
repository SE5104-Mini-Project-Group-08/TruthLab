from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB Atlas connection string from environment variable
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["truthlab_db"]
users_collection = db["users"]
verifications_collection = db["verifications"]
faq_questions_collection = db["faq_questions"]
report_collection = db["issue_reports"]
