from flask import Flask
from flask_restx import Api, Resource
from flaskext.mysql import MySQL
from flask_restx import reqparse


app = Flask(__name__)
api = Api(app)

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'opensourcedb'
app.config['MYSQL_DATABASE_PASSWORD'] = '1q2w3e'
app.config['MYSQL_DATABASE_DB'] = 'open_source_DB'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)


class CreateUser(Resource):
    def post(self):
            parser = reqparse.RequestParser()
            parser.add_argument('email', type=str)
            parser.add_argument('username', type=str)
            parser.add_argument('password', type=str)
            args = parser.parse_args()
 
            _userEmail = args['email']
            _userName = args['username']
            _userPassword = args['password']
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.callproc('sp_create_user', (_userEmail, _userName, _userPassword))
            data = cursor.fetchall()
 
            if len(data) is 0:
                conn.commit()
                return {'StatusCode': '200', 'Message': 'User creation success'}
            else:
                return {'StatusCode': '1000', 'Message': str(data[0])}

api.add_resource(CreateUser, '/user')

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/meet")
def meet():
    return "Nice to meet you!"

if __name__ == '__main__':
    app.run(host='0.0.0.0')
