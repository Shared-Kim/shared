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