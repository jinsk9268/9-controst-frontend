# 프로젝트 소개

24시간 이용가능한 심리 상담 서비스인 [트로스트](https://trost.co.kr/) 웹사이트 클론 프로젝트

---

### **개발 인원 및 기간**

- 기간 : 20.06.22 - 20.07.03
- 팀 구성 : 프론트엔드 3명, 백엔드 3명 (총 6명)
- Backend-Repo: [controst-Backend GitHub Repository 📍](https://github.com/wecode-bootcamp-korea/9-controst-backend)
- 개발 담당 :
  Main Page/Offline/Map - 송민규
  Partner/Profile - 진선경
  Nav/Footer/Signup/Signin - 김민지

---

### Demo

[![controst_trost_clone](http://img.youtube.com/vi/THkjI9YSHEo/0.jpg)](https://youtu.be/THkjI9YSHEo "controst_trost_clone")

### **사용된 기술**

- **FrontEnd**:

  - JavaScript
  - React
  - Sass(Scss)
  - KaKao Map API

- **BackEnd**:
  - Python
  - Django Web Framework
  - MySQL
- **Deployment**:
  - AWS EC2, RDS
  - CORS headers

---

### **구현 기능:**

#### **Main Page **:

- React의 Typing와 CountUp lib 사용하여 구현
- 이벤트 발생시 계산된 속성명을 통해 함수 반복 최소화
- mount시 setInterval 함수를 이용해 auto carousel구현과 map함수를 이용해 slide 생성 및 slick slider 구현

#### **Signup/Signin**

- email, nickname, password 각각의 validation 함수를 통해 조건 체크 구현
- email, nickname은 Backend와 통신하여 실제 데이터와의 중복체크 구현
- 통신 이후 조건 충족 시 가입완료 색상변경 및 로그인창 이동 구현

- 로그인 성공시 token을 localstorage 저장 이후 메인페이지 이동

#### **Nav**:

- Hover시 dropdown하고 Click시 dropdown이 사라지고 각 페이지 이동 구현

#### **Partner/Profile**

- fetch 로 백엔드로부터 데이터 받아와 파트너 카드 구현 (이름, 직책, headline, 별점, 리뷰수)
- 파트너 카드 컴포넌트 map 사용하여 리턴
- 필터 기능 구현 (이름, 상담사 레벨, 성별, 초기화)

- url parameter로 백엔드로부터 파트너 개별의 정보 받아와 페이지 구현
- active 탭 기능 사용
- 리뷰 데이터 컴포넌트 map 사용하여 리턴

#### **Offline/Map**

- 추천 상담사 리스트를 render시 1~2명의 랜덤한 상담사를 보여주도록 구현
- 상담사 데이터를 Offline페이지에서 fetch함수를 통해 setState한 후 Map의 마커에 필요한 데이터를 넘겨준다.
- 제휴된 상담사는 "T"표시를 해주는 validation함수 구현
- 리스트를 누를때 스크롤이 해당 리스트 위치로 스크롤하도록 설정, 마커가 표시되도록 구현
- 쿼리스트링 형태로 API를 호출하여 해당하는 페이지의 데이터를 불러오도록 pagination 구현

- Kakao Map API를 이용하여 상담센터 찾기 페이지 Map 구현
- marker와 position을 setState하여 componentDidUpdate에서 marker에 접근하여 prevProps를 비교하여 좌표 초기화 및 재설정

---
