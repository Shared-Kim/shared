const express = require('express');
const path = require('path');
const router = express.Router();
const prefixPath = '../react_part/yoon_view/build/';

//라우팅 경로 추가
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, prefixPath+'index.html'));
});



module.exports = router; // 가장 마지막에 사용, 없을 경우 라우팅 되지 않음