from flask import Flask, make_response, redirect, abort, jsonify
from flask_restful import reqparse, abort, Api, Resource

# Marshmallow Experiment

import json
from datetime import date
from marshmallow import Schema, fields, pprint

class ArtistSchema(Schema):
    name = fields.Str()

class AlbumSchema(Schema):
    title = fields.Str()
    release_date = fields.Date()
    artist = fields.Nested(ArtistSchema())
    age = fields.Int()

# 

app = Flask(__name__)

# app.config['SECRET_KEY'] = 'abc123'

api = Api(app)

@app.route('/marshmallow')
def marshm():
    bowie = dict(name='David Bowie')
    album = dict(artist=bowie, title='Hunky Dory', release_date=date(1971, 12, 17), age=12)

    schema = AlbumSchema()
    result = schema.dump(album)
    pprint(result.data, indent=2)

    # return json.dumps(result.data), 200
    return jsonify(result.data), 200

if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0')
    # manager.run(debug=True)

