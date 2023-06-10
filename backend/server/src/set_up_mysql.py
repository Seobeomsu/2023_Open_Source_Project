import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from config.conf import mysqlConf
db = mysqlConf['db']
user = mysqlConf['user']
host = mysqlConf['host']
passwd = mysqlConf['passwd']


os.system('')
os.system(f"sudo mysqladmin -u root create `{db}`")
os.system(f"sudo mysql -u root -e create user '{user}'@'{host}' identified by '{passwd}';")
os.system(f"sudo mysql -u root -e grant all privileges on *.* to '{user}'@'{host}';")
os.system('sudo cp ./server/DB/SURFACE_ASOS_131_DAY_2012_2022.csv /var/lib/mysql')

print('MYSQL 사용자 생성완료')