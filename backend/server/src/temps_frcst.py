import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from Modules.connDB import alchemy
import tensorflow as tf
from keras import models
from keras import layers
from keras.callbacks import EarlyStopping
import pandas as pd
import numpy as np

conn = alchemy.conn

sql="SELECT * FROM SURFACE_ASOS_131_DAY"
df = pd.read_sql_query(sql, conn)
df = df.astype({'tm':'datetime64[ns]'})
wdf=df.set_index(df['tm'],inplace=True)
Train_set = df.drop(['stnId','tm','minTa','maxTa'],axis=1)

dataset = Train_set.values
data_mean = dataset.mean(axis=0)
data_std = dataset.std(axis=0)
# 표준화
dataset = (dataset-data_mean)/data_std



Train_set = pd.DataFrame(dataset, index=df['tm'], columns=Train_set.columns)

x_train_set = Train_set.iloc[:-1]
y_train_set = Train_set.iloc[1:]

tempFrcst = models.Sequential()

tempFrcst.add(layers.Dense(144,input_dim=6,activation='linear'))
tempFrcst.add(layers.Dense(144,activation='linear'))
tempFrcst.add(layers.Dense(72,activation='linear'))
tempFrcst.add(layers.Dense(72,activation='linear'))
tempFrcst.add(layers.Dense(36,activation='linear'))
tempFrcst.add(layers.Dense(36,activation='linear'))
tempFrcst.add(layers.Dense(12,activation='linear'))
tempFrcst.add(layers.Dense(12,activation='linear'))
tempFrcst.add(layers.Dense(6,activation='linear'))
tempFrcst.add(layers.Dense(6,activation='linear'))
tempFrcst.add(layers.Dense(6,activation='linear'))
tempFrcst.add(layers.Dense(6,activation='linear'))
tempFrcst.add(layers.Dense(6,activation='linear'))


tempFrcst.compile(loss='mean_squared_logarithmic_error', optimizer='adam', metrics=['accuracy'])

early_stopping = EarlyStopping(monitor='loss', patience=100)
tempFrcst.fit(x_train_set,y_train_set, epochs=500, batch_size=500, callbacks=[early_stopping])
#tempFrcst.fit(x_train_set,y_train_set, epochs=200, batch_size=500);
print("\n 정확도: %.4f" % (tempFrcst.evaluate(x_train_set,y_train_set)[1]))

Test_Forecast_List = tempFrcst.predict(x_train_set.head(10))

Test_Forecast_List = (Test_Forecast_List * data_std) + data_mean

for i in range(10):
    print(Test_Forecast_List[i])



#  신경망 저장하기
answear = input("\n\n현재 수치예보모델 이름 > ")

# 모델 저장하기
tempFrcst.save('./server/models/{0}.ann'.format(answear))
tempFrcst.summary()  # 이게 있어야 불러올 때 잘 온다.
print("\n저장완료")