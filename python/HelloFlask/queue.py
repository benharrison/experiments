import os
import uuid
from flask import Flask, request

app = Flask(__name__)
app.debug = True

@app.route('/')
@app.route('/index')
def index():
    return 'Hello Flask!'

