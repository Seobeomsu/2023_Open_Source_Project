# -*- encoding:utf-8-*-
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from config.conf import mysqlConf
from flask import Flask, request
from flask_restx import Api, Resource
from flaskext.mysql import MySQL
from flask_cors import CORS
import Modules.wthr_to_db as wd
import pymysql

app = Flask(__name__)
api = Api(app)
cors = CORS(app)
app.config['JSON_AS_ASCII'] = False

#mysql DB 연결 설정
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = mysqlConf['user']
app.config['MYSQL_DATABASE_PASSWORD'] = mysqlConf['passwd']
app.config['MYSQL_DATABASE_DB'] = mysqlConf['db']
app.config['MYSQL_DATABASE_HOST'] = mysqlConf['host']
app.config['MYSQL_DATABASE_CHARACTER_SET'] = 'UTF-8'
mysql.init_app(app)



wd.start_wthr_to_db() #scheduler 실행


@api.route("/TourSpot")
class SendTourSpotData(Resource):
     def post(self):
        conn = mysql.connect() #mysql DB에 연결

        try:
            #조건 요청 받기 (json type)
            params = request.get_json()
            stnId = params['stnId']
            activity = params['activity']        

        #조건에 맞는 데이터 전송 (json type)
            with conn.cursor(pymysql.cursors.DictCursor) as cursor:
                table = f"SELECT * FROM TourSpot WHERE `stnId`=%s AND `activity`=%s"
                cursor.execute(table, (stnId, activity))
                data = cursor.fetchall()
        finally: 
            conn.close()
            
        if len(data) == 0:
            return {'StatusCode':'400', 'message':'you request wrong id or activity code'}
        else:
            return {'StatusCode':'200', 'data':data}
        
        
 
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, use_reloader=False)
