import requests

# API 인증키
API_KEY = "Cy2hhB4CjnW9YfGUIRuM8eJD2ywoJH1SBWFqYHxWi45mcv79MUbHVrYA1XK%2BeAKvgo45fGbS2%2B68GnXROF6ipw%3D%3D"

# 날씨 점수 계산 함수
def calculate_weather_score(weather_data):
    # 기상환경 점수 계산 로직 구현
    temperature = weather_data["temperature"]
    precipitation = weather_data["precipitation"]

    score = 0
    if temperature >= 15 and temperature <= 25:
        score += 50
    if precipitation <= 0.5:
        score += 50

    return score

# 중기예보 조회 함수
def get_midterm_forecast(reg_id):
    base_url = "http://apis.data.go.kr/1360000/MidFcstInfoService"
    endpoint = "/getMidLandFcst"
    url = base_url + endpoint

    # 파라미터 설정
    params = {
        "serviceKey": API_KEY,
        "numOfRows": 10,
        "pageNo": 1,
        "dataType": "JSON",
        "regId": reg_id,  # 지역 코드 (서울: 11B00000)
        "tmFc": "202305171800"  # 기준 날짜와 시간 설정 (YYYYMMDDHHMM 형식)
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        return data

    return None

# 별 관측하기 좋은 날짜 추천 함수
def recommend_observation_dates(reg_id):
    forecast_data = get_midterm_forecast(reg_id)
    if forecast_data:
        items = forecast_data["response"]["body"]["items"]["item"]

        result = []
        for item in items:
            weather_data = {
                "temperature": float(item["ta"]),
                "precipitation": float(item["rnSt"]),
            }
            score = calculate_weather_score(weather_data)
            date = item["tmFc"][:8]  # 날짜 정보만 추출
            result.append({"date": date, "score": score})

        return result

    return None

    else:
        print("중기예보 데이터를 가져오지 못했습니다.")

# 별 관측하기 좋은 날짜 추천 실행
recommend_observation_dates("11B00000")
