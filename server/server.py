# server.py
from flask import Flask, jsonify
from flask_cors import CORS
from routes.skrape import skrape_bp

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

# Register the blueprint
app.register_blueprint(skrape_bp, url_prefix='/skrape')

if __name__ == '__main__':
    app.run(debug=True, port=8080)
