import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from datetime import datetime
from Modules.asos_day import ASOS
from Modules.minudust import minudust
import schedule
import time

date = datetime.now()
date=date.strftime('%Y%m%d')
date=int(date)

def getWthrData(date):
    print("공공데이터 API불러오고 저장실행.")
    temp = ASOS(date, 131)
    temp.asosdata()
    
def start_wthr_to_db():    
    schedule.every().day.at("08:00").do(getWthrData(date))
    #schedule.every(5).minutes.do(getWthrData(date))
    while True:
        schedule.run_pending()
        time.sleep(1)