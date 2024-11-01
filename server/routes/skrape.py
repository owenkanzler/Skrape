from flask import Blueprint, jsonify, request
from services.skrape_url import skrape_website, ask_question

skrape_bp = Blueprint('skrape', __name__)

skraped_content = ""

@skrape_bp.route('/url', methods=['POST'])
def skrape():
    global skraped_content
    data = request.get_json()
    url = data.get('url')

    if not url:
        return jsonify({"error": "No URL provided"}), 400
    
    skraped_content = skrape_website(url)

    if skraped_content:
        print(f"Skraped Content: {skraped_content[:5000]}")
        return jsonify({"message": "URL sucessfully skraped"}), 200
    
    return jsonify({"error": "Failed to skrape URL"}), 500


@skrape_bp.route('/ask', methods=['POST'])
def ask():
    global skraped_content
    data = request.get_json()
    question = data.get('question')

    if not question:
        return jsonify({"error": "No question provided"}), 400

    if not skraped_content:
        return jsonify({"error": "No content to ask questions about"}), 400

    answer = ask_question(skraped_content, question)

    if answer:
        return jsonify({"answer": answer}), 200

    return jsonify({"error": "Failed to ask question"}), 500


    