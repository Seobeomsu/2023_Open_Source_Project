import selenium #셀레니움
import pandas as pd #csv를 읽고 dataframe을 사용하기 위한 pandas
from selenium import webdriver #브라우저를 띄우고 컨트롤하기 위한 webdriver
from selenium.webdriver.common.keys import Keys #브라우저에 키입력 용
from selenium.webdriver.common.by import By #webdriver를 이용해 태그를 찾기 위함
from selenium.webdriver.support.ui import WebDriverWait #Explicitly wait을 위함
from webdriver_manager.chrome import ChromeDriverManager #크롬에서 크롤링 진행 크롬 웹 드라이버 설치시 필요
from selenium.webdriver.support import expected_conditions as EC #브라우저에 특정 요소 상태 확인을 위해
from bs4 import BeautifulSoup #브라우저 태그를 가져오고 파싱하기 위함
from selenium.common.exceptions import NoSuchElementException,StaleElementReferenceException,TimeoutException #예외처리를 위한 예외들 
import time

import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from config.conf import service_key
from Modules.connDB import alchemy

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--headless")
# linux 환경에서 필요한 option
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

#크롤링할 구글맵 접속
ChromeDriverManager().install()
executable_path="/usr/bin/chromedriver"
driver = webdriver.Chrome(executable_path,
                          chrome_options=chrome_options)
driver.get("https://www.google.com/maps/")
time.sleep(2)

#검색창 탐색
def SearchSetup():    
    try:
        element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "searchbox"))) #입력창이 뜰 때까지 대기
    finally:
        pass
    
#검색 시작    
def SearchInput(list):
    search_box = driver.find_element(By.ID,"searchboxinput")
    search_box.send_keys("청주 " + list)
    search_box.send_keys(Keys.ENTER)

def SearchOutput():
    #검색 결과로 나타나는 scroll-bar 포함한 div 잡고 스크롤 내리기
    a = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, 
        '//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[2]')))
    scroll_div = driver.find_element(By.XPATH,
                '/html/body/div[3]/div[9]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[2]/div[1]')
    driver.execute_script("arguments[0].scrollBy(0,2000)", scroll_div)
    time.sleep(1)
    driver.execute_script("arguments[0].scrollBy(0,2000)", scroll_div)
    time.sleep(1)
    driver.execute_script("arguments[0].scrollBy(0,2000)", scroll_div)
    time.sleep(1)
    driver.execute_script("arguments[0].scrollBy(0,2000)", scroll_div)

    #한 칸 전체 데이터 가져오기
    elements = driver.find_elements(By.CLASS_NAME,'hfpxzc')
    return elements

#검색어 코드화
def CodeSet(list):
    if list == '꽃놀이': return '01'
    elif list == '물놀이': return '02'
    elif list == '캠핑': return '03'
    elif list == '피크닉': return '04'
    elif list == '별관측': return '05'

#크롤링 시작
def CrawlingOutput(elements,list):
    href=[]
    image_link=[]
    spot_name=[]
    spot_address=[]
    spot_context=[]
    activity=[]

    #세부 정보 창 접속
    for i in elements:
        href.append(i.get_attribute('href'))

    #세부 정보 크롤링 시작
    for i in href:
        driver.get(i)
        try:   
            time.sleep(1) 
            image = driver.find_element(By.XPATH,
                    '//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]/button/img')
            image_link.append(image.get_attribute('src'))
        except NoSuchElementException:
            #구글 사진용 기본이미지
            #time.sleep(2)
            #image = driver.find_element(By.XPATH,
                    #'//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]/div/img')
            #image_link.append(image.get_attribute('src'))
            image_link.append(pd.NA) #차후 제거하기 위해서
        time.sleep(1)
        try:    
            name = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((
                                            By.CSS_SELECTOR,'.DUwDvf.fontHeadlineLarge')))

            name = driver.find_element(By.CSS_SELECTOR,'.DUwDvf.fontHeadlineLarge')
            spot_name.append(name.text)
        except TimeoutException:
            spot_name.append(pd.NA)
        try:
            address = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((
                                                                By.CSS_SELECTOR,'.rogA2c')))        
            address = driver.find_element(By.CSS_SELECTOR,'.rogA2c')
            spot_address.append(address.text)
            time.sleep(1)
        except TimeoutException:
            spot_address.append(pd.NA)
        try:
            context = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((
                                                                By.CSS_SELECTOR,'.WeS02d.fontBodyMedium')))        
            context = driver.find_element(By.CSS_SELECTOR,'.WeS02d.fontBodyMedium')
            spot_context.append(context.text)
            time.sleep(1)
        except TimeoutException:
            spot_context.append('nothing')
        activity.append(CodeSet(list))
    driver.get("https://www.google.com/maps/")    
        

    #크롤링 정보 dataframe 형태로 저장
    df = pd.DataFrame({'stnId':'131','name':spot_name,'address':spot_address,'context':spot_context,
                       'imageaddress':image_link,'activity':activity})
    return df

print('관광지 데이터 크롤링 시작')

SearchSetup()
list=['꽃놀이','물놀이','캠핑','피크닉','별관측']
data = pd.DataFrame(columns=['stnId','name','address','context','imageaddress','activity'])

for i in list:
    SearchInput(i)
    data = pd.concat([data,CrawlingOutput(SearchOutput(),i)])
data=data.dropna() #pd.NA로 저장된 행 삭제
data.to_sql(name="TourSpot",con=alchemy.conn, if_exists='append',index=False)
alchemy.conn.close() #mysql DB에 데이터 저장
print('크롤링 종료, TourSpot에 데이터 저장 완료\n' + data.head(5))


