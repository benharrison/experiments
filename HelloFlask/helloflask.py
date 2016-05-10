import os
import uuid
from flask import Flask, request

app = Flask(__name__)
app.debug = True

@app.route('/')
@app.route('/index')
def index():
    return 'Hello Flask!'

@app.route('/upload-file', methods=['POST'])
def uploadFile():
    file = request.files['inputFile']

    if file:
        filename = str(uuid.uuid1()) + '_' + file.filename
        file.save(os.path.join('/home/bentest/Documents/uploads', filename))
        return filename
    else:
        return 'failed'

@app.route('/reverse-string/<strToReverse>')
def reverseString(strToReverse):
    reversedString = ''

    for letter in strToReverse:
        reversedString = letter + reversedString

    return reversedString

@app.route('/fizz-buzz')
def fizzBuzz():
    response = ''

    for i in range(1, 100):

        fizzBuzz = ''

        if i % 3 == 0:
            fizzBuzz += 'Fizz'

        if i % 5 == 0:
            fizzBuzz += 'Buzz'

        if fizzBuzz == '':
            fizzBuzz += str(i)

        response += fizzBuzz + '<br />'

    return response

if __name__ == "__main__":
    app.run()
