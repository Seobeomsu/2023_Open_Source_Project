# 2023_Open_Source_Project 
# 놀러갈래

![](https://github.com/Seobeomsu/2023_Open_Source_Project/blob/front/frontend/src/image/character.png)

- [Project summary](#da-design-server)
  - [Purpose](#purpose)
  - [Requirements](#requirements)
  - [How to install](#how-to-install)
- [How to use](#how-to-use)
- [Version History](#version-history)
- [Contributor](#contributor)
- [License](#license)

---

### Project summary

본 프로젝트는 2023-1학기 오픈 소스기초프로젝트에서 시작된 프로젝트로 간편한 여행계획에 필요한 여러 정보를 종합적으로 제공하기 위한 플랫폼이다.

#### Purpose

여행 계획을 세울 때 여행지 정보 따로 날씨 정보 따로 파편화 되어있어서 혹은 너무 많아서 불편함을 겪었던 경우가 있다. 만약 당일치기 여행이나 나들이 계획을 세운다면 방대한 정보는 때론 방해가 되기도 한다.
특히 갑자기 훌쩍 떠나고 싶을 때 차 안에서 스마트폰으로 주야장천 어디를 갈지 검색하는 건 꽤 궁상맞은 일일 것이다.

이에 우리는 여행지 정보와 날씨 정보 모두 통합해 제공하는 시스템이 필요하다고 여겼고
본 플랫폼은 날씨 예측 기반 여행지 추천 및 정보 제공으로 그러한 니즈를 충족시킬 수 있다.

#### Requirements

- Backend
* requirements.txt 참고.
* Nginx
* MYSQL
* uWSGI, Python3 plugin
* Chrome

- Frontend
* React

#### How to install

* First git clone
```sh
git clone ...........
```

- Backend install

```sh
cd 2023_Open_Source_Project/backend
pip3 install -r server/requirements.txt
```

* Install Nginx >= 1.18.0

```sh
sudo apt-get install nginx
```

* Install MYSQL >= 8.0.33

```sh
sudo apt-get install mysql-server mysql-client
```

* Install uWSGI-Plugin-Python3

```sh
sudo apt-get install uwsgi-plugin-python3
```

* Install Chrome lastest version

```sh
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i ./google-chrome-stable_current_amd64.deb
```

- Frontend install

* install Librarys
```sh
cd 2023_Open_Source_Project/frontend
npm install i
```

---

### How to use

#### Backend server start

* Config server

open conf.py and modify it if you want

```py
공공 데이터 api 서비스키
service_key =\
    {
        'service_key': 'use your service key from https://www.data.go.kr/index.do' 
    }

# MSQL 서버 정보
mysqlConf =\
    {
        'user': 'ApiDataServer',
        'passwd': '1234',
        'db': 'ApiDataBase',
        'host':'localhost'
    }
```
* Start Backend server  <img src="https://img.shields.io/badge/ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white"/>

```sh
cd 2023_Open_Source_Project/backend
sudo sh server/setupAPIserver.sh
```

#### Frontend server start

* Start React  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>

```sh
npm run dev
```

* Open Page

http://localhost:5173


---

### Version History

* v.0.0.1 : 프로토 타입

---

### Contributor

|Seobeomsu : 서범수|
|---|
|yangsua   : 양수아|
|AhnJewon  : 안제원|

---

### License

MIT License

Copyright (c) 2023 Seobeomsu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.