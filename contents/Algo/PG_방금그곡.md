---
date: '2022-12-29'
title: '[PG] - [3차] 방금그곡'
categories: ['Algorithm', 'Programmers']
summary: '프로그래머스 - 2018 KAKAO BLIND RECRUITMENT [3차] 방금그곡'
thumbnail: './default.png'
---

## 📜 내 풀이

[➡️ 방금그곡 풀어보기](https://school.programmers.co.kr/learn/courses/30/lessons/17683)

```javascript
function solution(m, musicinfos) {
  const answer = []

  const parsingRoundsPitch = str => {
    return str
      .replaceAll('A#', 'a')
      .replaceAll('B#', 'b')
      .replaceAll('C#', 'c')
      .replaceAll('D#', 'd')
      .replaceAll('E#', 'e')
      .replaceAll('F#', 'f')
      .replaceAll('G#', 'g')
  }

  for (let i = 0; i < musicinfos.length; i++) {
    let [startTime, endTime, title, pitchInfos] = musicinfos[i].split(',')
    const [startHour, startMinute] = startTime.split(':').map(Number)
    const [endHour, endMinute] = endTime.split(':').map(Number)
    let playTime = (endHour - startHour) * 60 + (endMinute - startMinute)
    let playPitch = ''

    m = parsingRoundsPitch(m)
    pitchInfos = parsingRoundsPitch(pitchInfos)

    let count = pitchInfos.length
    const initPlayTime = playTime
    while (true) {
      if (count === 0) break
      else if (playTime < count) {
        playPitch += pitchInfos.slice(0, playTime)
        break
      } else {
        playPitch += pitchInfos
        playTime -= count
      }
    }

    if (playPitch.indexOf(m) !== -1) {
      answer.push({ title, playTime: initPlayTime })
    }
  }
  if (answer.length === 0) return '(None)'
  else if (answer.length === 1) answer[0].title
  answer.sort((a, b) => {
    if (a.playTime === b.playTime) return a.title - b.title
    return b.playTime - a.playTime
  })

  return answer[0].title
}
```

## ⭐️ 해결 과정

처음에 # 처리를 안해서 여러 테스트케이를 통과 못시켜서 이 #처리를 위해 #이 붙는 음들은 소문자로 변형해주었다. Ex) A# → a, C# → c 따라서 CC#BCC#BCC#BCC#B는 CcBCcBCcbCcb 형태가 된다.

playTime은 시간과 분을 모두 분으로 통일 시켜 파싱시켜주었으며, 앞서 구한 playTime 시간을 count 변수로 초기화 시킨후 playTime 시간동안 음악이 나온 음들을 붙이는 작업은 while문을 돌면서 playPitch 라는 변수에 담아주었다.

이제 앞서 붙인 playPitch 안에 있는 문자열이 m과 일치하는 문자가 있다면 ? indeOf 함수로 해당 문자열 m이 존재하는지 체킹하여 있다면 ? answer 배열 변수에 객체형태로 저장하였다.

> { playTime , title } 와 같은 형태

마지막 작업만 남았다.

answer 안에 데이터가 없거나 하나일경우엔 간단히 리턴 시켰고 만약 2개 이상이면 문제에서 주어진대로 정렬 시킨이후에 title값을 반환해야하므로 정렬된 answer의 맨 앞의 값이 가지고 있는 title 반환.

1. answer안에 값이 존재하지 않으면 (None) 리턴
2. answer안에 있는 값이 하나라면 해당 값 title 리턴
3. 여러개라면 정렬 후에 첫번째 값의 title 리턴
