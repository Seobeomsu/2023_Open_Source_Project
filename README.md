# 2023_Open_Source_Project 
# 놀러갈래

![](https://github.com/Seobeomsu/2023_Open_Source_Project/blob/front/frontend/src/image/character.png)

- [Project summary](#da-design-server)
  - [Purpose](#purpose)
  - [Requirements](#requirements)
  - [How to install](#how-to-install)
- [How to use](#how-to-use)
- [Version History](#version-history)
- [Contacts](#contacts)
- [License](#license)

---

### Project summary

본 프로젝트는 2022-1학기 오픈소스기초프로젝트에서 시작된 프로젝트로 당일 

#### Purpose

여행 계획을 세울때 여행지 정보 따로 날씨정보 따로 파편화 되어있음 따라서 불편함이 야기됨 여행지 정보와 날씨정보 모두 통합된 시스템 필요

교통 발달로 당일 치기 여행 잛은 여행 증가 복잡한 여행 계획 대신 간편한 여행계획의 필요성 대두 따라서 꼭 필요한 정보만이 필요함

본 앱은 날씨 예측 기반 여행지 추천 및 정보 제공으로 그러한 니즈를 충족시킬 수 있다

#### Requirements

* requirements.txt 참고.

#### How to install

```sh
git clone ...........
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
---

### How to use

```sh
cd 2023_Open_Source_Project/backend
sudo sh server/setupAPIserver.sh
```

---

### Version History

* v.0.0.1 : 프로토 타입

---

### Contributor



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