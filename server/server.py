# server.py
from flask import Flask, jsonify
from routes.skrape import skrape_bp

app = Flask(__name__)

app.register_blueprint(skrape_bp, url_prefix='/skrape')

if __name__ == '__main__':
    app.run(debug=True, port=8080)
