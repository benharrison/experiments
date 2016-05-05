from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return 'Hello Flask!'

@app.route('/reverse-string/<strToReverse>')
def reverseString(strToReverse):
    reversedString = ''

    for letter in strToReverse:
        reversedString = letter + reversedString

    return reversedString

if __name__ == "__main__":
    app.run()
