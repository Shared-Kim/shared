const express = require('express');
const app = express();
const path = require('path');

// react 뷰페이지 경로 라우팅 추가
const zxooRouter = require('./router/zxoo')
const yoonRouter = require('./router/yoon')

app.use('/zxoo', zxooRouter); 
app.use('/yoon', yoonRouter);
//


// react 정적 리소스 사용을 위해 선언
app.use(express.static(path.join(__dirname, '/react_part/yoon_view/build')));

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 