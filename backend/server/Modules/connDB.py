import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from config.conf import mysqlConf
import pymysql
from sqlalchemy import create_engine

#mysql DB에 연결
host=mysqlConf['host']
user=mysqlConf['user']
passwd=mysqlConf['passwd']
db=mysqlConf['db']

#sqlalchemy의 연결 방식 사용
class alchemy:
    db_connection_str = 'mysql+pymysql://{0}:{1}@{2}/{3}'.format(user,passwd,host,db)
    db_connection = create_engine(db_connection_str)
    conn = db_connection.connect()

#pymysql의 연결방식 사용
class mysql:
    conn = pymysql.connect(host=mysqlConf['host'],user=mysqlConf['user'],password=mysqlConf['passwd'],db=mysqlConf['db'],charset='utf8mb4')