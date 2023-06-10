#!/bin/bash

python=`python3 -V`
need="Python 3.10.6"

if [[ "$python" < "$need" ]];
then
    echo "파이썬 버전이 낮습니다."
    exit
fi

CreateDIR=/var/www/uwsgi

sudo mkdir $CreateDIR

sudo chmod -R 755 /var/run/mysql

echo sudo service nginx start
echo sudo service mysql start

python3 ./server/src/set_up_mysql.py

python3 ./server/src/create_mysql_db.py

python3 ./sever/src/tour_spot_crawling.py

echo "MYSQL DB 생성완료"

sudo rm /etc/nginx/sites-available/default
sudo cp server/share/nginx/default /etc/nginx/sites-available

sudo uwsgi --ini server/uwsgi_flask_was.ini
echo "API 서버 실행"

sudo service nginx reload