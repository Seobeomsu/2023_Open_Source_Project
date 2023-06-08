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

sudo mysql -u root -p