import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from config.conf import mysqlConf

os.system('sudo mysql -u root -p')
os.system('\n')
os.system(f"create database {mysqlConf['db']} default character set utf8;")
os.system(f"create user '{mysqlConf['user']}'@'{mysqlConf['host']}' identified by '{mysqlConf['passwd']}';")
os.system(f"grant all privileges on *.* to '{mysqlConf['user']}'@'{mysqlConf['host']}';")
os.system('exit')
os.system('sudo cp ./server/DB/SURFACE_ASOS_131_DAY_2012_2022.csv /var/lib/mysql')

print('MYSQL 사용자 생성완료')