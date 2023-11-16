import os
import time 
import json 

from flask import Flask, render_template, request, flash, jsonify
if os.path.exists("env.py"):
    import env

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/test", methods=["POST"])
def test():
    if request.method == "POST":
        data = request.get_json()
        
        # do something here
        print(data)
        
        response_data = {
            "message": time.asctime(),
            "payload": "Hello, World!"
        }
        return jsonify(response_data)

if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True)

