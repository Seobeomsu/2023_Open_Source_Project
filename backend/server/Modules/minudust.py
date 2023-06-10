from datetime import datetime, timedelta
import requests
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from config.conf import service_key


class minudust:

    def __init__(self, date, code):

        date = str(date)
        date = datetime.strptime(date, '%Y%m%d')
        searchdate = date.strftime('%Y-%m-%d')
        self.date = searchdate
        self.code = code

    def weekdustfrcst(self):

        url = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth'
        params = {'serviceKey': service_key['service_key'], 'returnType': 'json',
                  'numOfRows': '100', 'pageNo': '1', 'searchDate': self.date, 'InformCode': self.code}

        response = requests.get(url, params=params)
        response.encoding = 'UTF-8'
        html = response.text
        print(html)
