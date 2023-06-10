import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from Modules.connDB import mysql
from config.conf import mysqlConf
import time

cur = mysql.conn.cursor()

asos = f'''
        CREATE TABLE `{mysqlConf['db']}`.`SURFACE_ASOS_131_DAY`
        ( 
            `stnId` INT NULL DEFAULT NULL, 
            `tm` DATE NOT NULL, 
            `minTa` FLOAT NOT NULL, 
            `avgTa` FLOAT NOT NULL, 
            `maxTa` FLOAT NOT NULL, 
            `sumRn` FLOAT NULL, 
            `avgWs` FLOAT NOT NULL, 
            `avgTd` FLOAT NOT NULL, 
            `avgRhm` FLOAT NOT NULL, 
            `angPa` FLOAT NOT NULL
            PRIMARY KEY (`tm`));
        '''

tourspot = f''' 
            CREATE TABLE `{mysqlConf['db']}`.`TourSpot` 
            ( 
                `stnId` VARCHAR(100) NOT NULL ,
                `name` VARCHAR(100) NOT NULL , 
                `address` VARCHAR(1000) NOT NULL ,
                `context` VARCHAR(1000) NOT NULL , 
                `imageaddress` VARCHAR(5000) NOT NULL ,
                `activity` VARCHAR(10) NOT NULL, 
                PRIMARY KEY (`name`(100)));
            
            '''

sql = '''

      LOAD DATA INFILE "./SURFACE_ASOS_131_DAY_2000_2022.csv"
      INTO TABLE SURFACE_ASOS_131_DAY FIELDS TERMINATED BY ','
      IGNORE 1 ROWS

      '''

list = [asos,tourspot,sql]

for i in list:
    if i==sql:
        print('SURFACE_ASOS_131_DAY_2000_2022.csv 저장 시작')
    cur.execute(i)
    mysql.conn.commit()
    if i==asos:
        print('SURFACE_ASOS_131_DAY 테이블 생성완료')
    elif i==tourspot:
        print('TourSpot 테이블 생성완료')
    else: 
        print('SURFACE_ASOS_131_DAY에 데이터저장 완료')
    time.sleep(5)
