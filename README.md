# Shared

Backend Node.js
* Framework : express, router, nodemon

서버 시작 및 설정 파일 (server.js)
* http://localhost:8080
react 개별 화면 테스트로 routing 경로 분리
/yoon/...
/zxoo/...
ex) http://localhost:8080/yoon/index

각 경로에 대해서는 /router/yoon.js , zxoo.js 파일 내 명시

node server.js // 소스 변경 시 재시작 O
nodemon server.js // 소스 변경 시 재시작 X , nodemon 필요
* npm install nodemon --save

* express 라우팅 기본 개념 예제 / /a /b /c
node 01-routing-example.js 

Frontend react

1. zxoo, yoon 으로 폴더 분리
<프로젝트 내부 react 뷰 소스 경로>
react_part/yoon_view
react_part/zxoo_view -- 미생성

2. react 프로젝트 init

$ npm install -g create-react-app
$ create-react-app zxoo_view(이름)

3. react 빌드

npm run build

4. 단위 테스트

jest를 사용하며 /lib/__tests__ 하위에 테스트를 진행할 코드를 작성하여 확인
npm test ---watch --> --watch 매개변수로 제스트에 파라미터 전달
npm test -- --coverage --> 단위테스트에 대한 결과를 정략적으로 확인

5. 실행 환경 설정
$ export NODE_ENV=production


998. 프로젝트 파일 및 결로 설명
meadowlark.js --> node 기본 테스트용 js

999. npm 추가 목록
npm install express-handlebars@3 --> node 화면용 페키지
/*단위테스트용 페키지
npm install --save-dev jest@25 
npm install --save-dev puppeteer@1
npm install --save-dev portfinder@1
*/

// POST Body Parser 패키지
npm install body-parser@1

// 세션&쿠키 관련 패키지
npm install cookie-parser@1
npm install express-session@1

// 로그 관련 패키지
npm install morgan