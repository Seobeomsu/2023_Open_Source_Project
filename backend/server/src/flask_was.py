# -*- encoding:utf-8-*-
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from config.conf import mysqlConf
from flask import Flask, make_response
from flask_restx import Api, Resource
from flaskext.mysql import MySQL
from flask_restx import reqparse
import Modules.wthr_to_db as wd
import json
import pymysql

app = Flask(__name__)
api = Api(app)

app.config['JSON_AS_ASCII'] = False

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = mysqlConf['user']
app.config['MYSQL_DATABASE_PASSWORD'] = mysqlConf['passwd']
app.config['MYSQL_DATABASE_DB'] = mysqlConf['db']
app.config['MYSQL_DATABASE_HOST'] = mysqlConf['host']
app.config['MYSQL_DATABASE_CHARACTER_SET'] = 'UTF-8'
mysql.init_app(app)

conn = mysql.connect()

wd.start_wthr_to_db()


@api.route("/TourSpot")
class SendTourSpotData(Resource):
     def get(self):
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        table = "SELECT * FROM TourSpot"
        cursor.execute(table)
        data = cursor.fetchall()
        data = json.dumps(data, ensure_ascii=False)
        data = make_response(data)
        return data
        
        



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
            
            cursor = conn.cursor()
            cursor.callproc('sp_create_user', (_userEmail, _userName, _userPassword))
            data = cursor.fetchall()
 
            if len(data) is 0:
                conn.commit()
                return {'StatusCode': '200', 'Message': 'User creation success'}
            else:
                return {'StatusCode': '1000', 'Message': str(data[0])}

api.add_resource(CreateUser, '/user')
 
if __name__ == '__main__':
    app.run(host='0.0.0.0')
