import os
from flask import Flask, render_template, jsonify
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

@app.route("/")
def root_route():
    background_url = os.environ.get('BACKGROUND_URL', '')
    return render_template('template.html', background_url=background_url)

@app.route("/get_music_url")
def get_music_url():
    return jsonify({"url": os.environ.get('TETRIS_THEME_MP3_URL', '')})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
