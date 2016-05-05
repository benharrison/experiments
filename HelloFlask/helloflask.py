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
