# server.py
from flask import Flask, jsonify
from routes.skrape import skrape_bp
import os

app = Flask(__name__)

app.register_blueprint(skrape_bp, url_prefix='/skrape')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))  # Default to 8080 if PORT not set
    app.run(host='0.0.0.0', port=port)
