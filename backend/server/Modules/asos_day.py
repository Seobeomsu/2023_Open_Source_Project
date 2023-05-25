import requests
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from config.conf import service_key
from Modules.connDB import alchemy
import json
import pandas as pd
path = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))

class ASOS:
    def __init__(self, date, stnId):
        self.date = date
        self.stnId = str(stnId)

    def asosdata(self):
        startDt = str(self.date-1)
        endDt = str(self.date-1)
        url = 'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList'
        params = {'serviceKey': service_key['service_key'], 'pageNo': '1', 'numOfRows': '500', 'dataType': 'JSON',
                  'dataCd': 'ASOS', 'dateCd': 'DAY', 'startDt': startDt, 'endDt': endDt, 'stnIds': self.stnId}

        response = requests.get(url, params=params)
        response.encoding = 'UTF-8'
        html = response.content
        data = json.loads(html)
        print(data)
        data = data['response']['body']['items']['item']
        df = pd.json_normalize(data)
        df['sumRn'] = df['sumRn'].replace(r'^\s*$', 0, regex=True)
        df = df[['stnId','tm','minTa','avgTa','maxTa','sumRn','avgWs','avgRhm','avgTd','avgPa']]
        #df.info()
        #df.to_csv([f"{path}/tmp_asos.csv"])
        df.to_sql(name="SURFACE_ASOS_131_DAY",con=alchemy.conn, if_exists='append',index=False)
