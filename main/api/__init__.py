from flask import Blueprint, request, jsonify

api = Blueprint("api", __name__)

def json(**kwargs):
    return jsonify(kwargs)

@api.route('/')
def index():
    return "This is the api route. Any route after <a href='/api'>/api</a> route is for the backend."

@api.route('/hello')
def hello():
    return json(data="Hello, World!")