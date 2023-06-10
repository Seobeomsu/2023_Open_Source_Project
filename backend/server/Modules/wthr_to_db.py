import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from datetime import datetime
from Modules.asos_day import ASOS
from Modules.minudust import minudust
from apscheduler.schedulers.background import BackgroundScheduler

#APScheduler background 실행시 uwsgi의 multi threads 활설화 필요

#scheduler 실행여부 확인용
def test():
    print("Scheduler is alive!")

#data mysql저장 실행
def getWthrData():
    print("공공데이터 ASOS API불러오고 저장실행.")
    date = datetime.now()
    temp = ASOS(date, 131)
    temp.asosdata()
    
#scheduler 실행    
def start_wthr_to_db():    
    schedule = BackgroundScheduler(daemon=True, timezone='Asia/Seoul')
    schedule.add_job(test, 'interval', minutes=31, id='test')
    schedule.add_job(getWthrData, 'cron', hour='9')
    schedule.start()
