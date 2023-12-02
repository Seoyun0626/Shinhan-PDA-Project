# 📱 주토피아
| 메인 페이지 |
|----------|
|![image](https://github.com/Seoyun0626/Seoyun0626/assets/104416283/3fb48113-15a9-43c2-a103-a8fdb3fdac1e)
![KakaoTalk_20231202_151629631_01](https://github.com/Seoyun0626/Seoyun0626/assets/104416283/edbf127c-cb20-439a-a3b8-55f0fa0f6844)|

| 개인 위키 페이지 |
|----------|
|![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/8c54f768-81e1-4507-bd22-2477a53e2484)|

| 상세 페이지 |
|----------|
|![KakaoTalk_20231202_151629631](https://github.com/Seoyun0626/Seoyun0626/assets/104416283/caca2a3e-249a-451c-b23d-a4c2d4d7b1fc)|

<br>

## 프로젝트 소개
- 주식 초보자를 위한 증권 정보 제공 서비스
- 친절한 정보 제공
  - 생소한 주식 용어에 대한 이해 어려움 -> 용어에 대한 부연 설명 제공
  - 차트와 재무재표에 대한 정보 해석의 어려움 -> 차트와 재무재표 정보에 대한 AI 해설 제공
  - 개인화된 종목 추천 받고 싶은 욕구 -> 사용자 관심 분야에 맞춘 종목 추천
  - 즉각적인 정보 이해와 해석 욕구 -> 인공지능 챗봇을 이용하여 질문에 대한 즉각적인 답변 제공
- 능동적인 정보 제공
    - 챗봇 대화 내용을 기반으로 사용자 별 "커스텀" 개인 위키 페이지 제공

<br>

## 팀원 구성

<ul>
  <li>김서윤 - MainPage, FilterPage, LoginPage, PPT제작</li>
  <li>고나형 - Server,Crawling, Propmt Engineering, Chat그래프</li>
  <li>서준원 - Server, OpenAPI파싱 구현, JWT활용_로그인 회원가입 기능 구현</li>
  <li>정희빈 - Header&Footer, DetailPage, GuidePage, Chatbot, FeedbackPage, PPT제작&발표</li>
</ul>

<br>

## 1. 개발 환경

### TechStack
![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/0125ff53-8360-4534-aeca-3c18a014d5a9)

### ERD
![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/e8fc84ed-06a4-43fb-9c70-9ec55de4f3ee)

<br>

## 💡개발 포인트

### MSA 구현
![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/67a4265d-976b-44f9-8827-065e758896b8)
<ul>
  <li>각 기능에 따라 서버 분리를 통해 MSA 구축</li>
  <li>각 서버에 따라 분리된 DB사용을 통해 MSA 구축</li>
  <li>MSA 구축을 함으로써 추후 더 좋은 모델의 Chat AI 교체 용이</li>
</ul>

### MSA Infra Architecture
![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/76463a27-b750-433f-b874-7b682bc62150)
![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/079a9ada-31a2-4bd6-a8ae-2775dba397ae)

## 💡개발 포인트 

### Chat AI 속도 개선
![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/5412421a-23a3-47c6-85c4-87bec8496567)

- 질문하기
  - Chat AI를 사용하여 답변 제공
- 용어검색
  - 이전에 검색한 기록이 존재하는 경우 -> Redis 사용을 통해 Caching 처리를 통한 속도 개선
  - 이전에 검색한 기록이 없는 경우 -> Chat AI를 사용하여 답변 제공 후 용어 검색 기록 Redis 저장
  - 294배 속도 개선(22.26s --> 29ms)
 
## 💡개발 포인트

### AI REPORT 호출 최적화
![image](https://github.com/Seoyun0626/Shinhan-PDA-Project/assets/104416283/d0af8866-3b2d-4ca7-9c2f-7c019adbafa1)
- 스프링 스케쥴러 사용 이전
  - 사용자가 차트 AI Report & 재무재표 AI Report를 요청할 때 OpenAI를 매번 호추하여 응답 대기 시간이 길어지는 현상 발생
- 스프링 스케쥴러 사용 이후
  - 차트 AI Report(매일 00시), 재무재표 AI Report(분기) 스프링 스케쥴링을 통해 데이터 업데이트를 진행함으로써 응답 시간 단축 효과 발생

## 💡개발 포인트

### 단기 / 장기 AI Report 프롬프트 구분
- 단기 투자자
  - 차트 AI - 단기간(5일) 이동 평균선 해석
  - 재무재표 AI - ROE와 같은 단기 투자자에 적합한 재무재표 항목 기반 해석
- 장기 투자자
  - 차트 AI - 장기간(120일) 이동 평균선 해석
  - 재무재표 AI - 연간 재무재표와 같은 장기 투자자에 적합한 재무재표 항목 기반 해석  

 








