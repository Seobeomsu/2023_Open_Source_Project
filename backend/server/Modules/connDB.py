import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from config.conf import mysqlConf
import pymysql
from sqlalchemy import create_engine

host=mysqlConf['host']
user=mysqlConf['user']
passwd=mysqlConf['passwd']
db=mysqlConf['db']

class alchemy:
    db_connection_str = 'mysql+pymysql://{0}:{1}@{2}/{3}?charset=utf8'.format(user,passwd,host,db)
    db_connection = create_engine(db_connection_str)
    conn = db_connection.connect()

class mysql:
    conn = pymysql.connect(host=mysqlConf['host'],user=mysqlConf['user'],password=mysqlConf['passwd'],db=mysqlConf['db'],charset='utf8mb4')