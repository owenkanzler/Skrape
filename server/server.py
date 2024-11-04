# server.py
from flask import Flask, jsonify
from flask_cors import CORS
from routes.skrape import skrape_bp
import os

app = Flask(__name__)
# app = Flask(__name__, static_folder='../client/dist/static', template_folder='../client/dist')
# CORS(app)

app.register_blueprint(skrape_bp, url_prefix='/skrape')

if __name__ == "__main__":
    app.run(port=8080)
