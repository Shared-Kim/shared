
const fortunes = [
    "오늘도 노드 공부를 하다가 하루가 가겠지",
    "가카그케 코",
    "노웨이 홈 결말은 모두 잊혀지는 거다",
    "시브스 아웃 영화는 반전이 있다",
    "12월 31일 작업 때문에 퇴근 못함"
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortunes.length)
    return fortunes[idx]
}