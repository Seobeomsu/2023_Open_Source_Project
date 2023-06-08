import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

import requests
from config.conf import service_key
from Modules.connDB import alchemy
import json
import pandas as pd
import datetime as dt
#path = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))

class ASOS:
    def __init__(self, date, stnId):
        self.date = date
        self.stnId = str(stnId)

    #DB에 ASOS데이터 저장
    def asosdata(self):
        startDt = self.date + dt.timedelta(days=-1)
        startDt = str(startDt.strftime('%Y%m%d'))
        endDt = self.date + dt.timedelta(days=-1)
        endDt = str(endDt.strftime('%Y%m%d'))
        
        url = 'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList'
        params = {'serviceKey': service_key['service_key'], 'pageNo': '1', 
                  'numOfRows': '500', 'dataType': 'JSON', 'dataCd': 'ASOS', 
                  'dateCd': 'DAY', 'startDt': startDt, 'endDt': endDt, 'stnIds': self.stnId}

        response = requests.get(url, params=params)
        response.encoding = 'UTF-8'
        html = response.content
        data = json.loads(html) #딕셔너리 타입으로변환
        data = data['response']['body']['items']['item']
        df = pd.json_normalize(data) #dataframe 형태로 가공
        df['sumRn'] = df['sumRn'].replace(r'^\s*$', 0, regex=True)
        df = df[['stnId','tm','minTa','avgTa','maxTa',
                 'sumRn','avgWs','avgRhm','avgTd','avgPa']]
        #df.info()
        #df.to_csv([f"{path}/tmp_asos.csv"])
        print(df.head(5))

        try:
            df.to_sql(name="SURFACE_ASOS_131_DAY",con=alchemy.conn, if_exists='append',index=False)
        except:
            alchemy.conn.rollback()