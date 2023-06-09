import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from Modules.connDB import alchemy

from keras import models
from keras import layers
from keras.models import Sequential
from keras.models import load_model
from keras.layers import Dense
from keras.callbacks import EarlyStopping

import numpy as np
import tensorflow as tf
import pandas as pd

conn = alchemy.conn

# 신경망 모델 불러오기
def load_model_except():
    answear = input("수치예보모델 불러오기 >")

    try:
        Weather_Forecast_Mode_Local = load_model(answear)
    except:
        print("파일열기 실패\n")
        Weather_Forecast_Mode_Local = -1

    return Weather_Forecast_Mode_Local

# 신경망 모델 불러오기

Weather_Forecast_Model = load_model_except()

while(Weather_Forecast_Model == -1):
    Weather_Forecast_Model = load_model_except()



Weather_Forecast_Model.summary()

# 확인 과정
print("\n\n불러오기 완료\n\n")


# 현재값 입력받기

sql="SELECT * FROM SURFACE_ASOS_131_DAY"
df = pd.read_sql_query(sql, conn)
conn.close()
df = df.astype({'tm':'datetime64[ns]'})
wdf=df.set_index(df['tm'],inplace=True)
Train_set = df.drop(['stnId','tm','minTa','maxTa'],axis=1)

# 앞으로의 예측시간
Days = input("예측일: ")
Days = int(Days)

# 데이터 가공
dataset = Train_set.values
data_mean = dataset.mean(axis=0)
data_std = dataset.std(axis=0)
# 표준화
dataset = (dataset-data_mean)/data_std

X_data = pd.DataFrame(dataset, index=df['tm'], columns=Train_set.columns)
X_data = X_data.iloc[-10:]
print("입력 데이터")
print(X_data)
print("\n\n\n")

Temp = Weather_Forecast_Model.predict(X_data)

time = 0
while(time < Days - 1):
    Temp = Weather_Forecast_Model.predict(Temp)
    time = time + 1

#표준화 복호화
Temp = (Temp * data_std) + data_mean

# 데이터 가공 및 결과 받아오기
Forecast_Temperature = Temp[:][0]
# 1미만이면 그냥 없는 것으로 하자 0으로 나눔 예외발생한다.
if Temp[:][1]  < 1:
    Forecast_Rain = 0
else:
    Forecast_Rain = Temp[:][1]

Forecast_Wind = Temp[:][2]
Forecast_Humidity = Temp[:][3]
Forecast_Dew_Point = Temp[:][4]
Forecast_Pressure = Temp[:][5]



print("기상예보 \n\n")

print("예보 데이터")
print(Temp)
print("\n")

print("기온: ", Forecast_Temperature, "C")
print("강수량: ", Forecast_Rain, "mm")
print("풍속: ", Forecast_Wind, "M/s")
print("습도: ", Forecast_Humidity, "%")

print("이슬점: ", Forecast_Dew_Point, "C")
print("기압: ", Forecast_Pressure, "hpa")

answear = input("\n\n결과 저장할 파일 이름 > ")
path = f'./server/forecast/save/{answear}.csv'

Save_Array = [Forecast_Temperature,Forecast_Rain,Forecast_Wind, Forecast_Humidity,Forecast_Dew_Point,Forecast_Pressure]

Save_File = [ Save_Array]

Forecast_File = pd.DataFrame(Save_File)
Forecast_File.to_csv(answear, header = False, index = False)
print("\n\n 결과저장완료")