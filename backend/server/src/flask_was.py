# -*- encoding:utf-8-*-
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from config.conf import mysqlConf
from flask import Flask, request
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
     def post(self):

        params = request.get_json()
        _id = params['_id']
        activity = params['activity']        

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        table = f"SELECT * FROM TourSpot WHERE `_id` = {_id} AND `activity` = {activity}"
        cursor.execute(table)
        data = cursor.fetchall()

        if len(data) == 0:
            return {'StatusCode':'400', 'message':'you request wrong id or activity code'}
        else:
            return {'StatusCode':'200', 'data':data}
        
        
 
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, use_reloader=False)
