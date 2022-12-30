---
date: '2022-12-30'
title: '[PG] - [3차] 파일명 정렬'
categories: ['Algorithm', 'Programmers']
summary: '프로그래머스 - 2018 KAKAO BLIND RECRUITMENT [3차] 파일명 정렬'
thumbnail: './default.png'
---

## 📜 내 풀이

[➡️ 파일명 정렬 풀어보기](https://school.programmers.co.kr/learn/courses/30/lessons/17686)

```javascript
function solution(files) {
  const answer = []
  const modifyFiles = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    // 처음 숫자가 나오는 인덱스를 구해서 slice로 분리하자.
    const numIdx = file.search(/[\d]/)
    let notNumIdx = file.slice(numIdx).search(/[\D]/)
    if (notNumIdx === -1) notNumIdx = file.length
    const lastIdx = numIdx + notNumIdx
    const obj = {
      HEAD: file.slice(0, numIdx),
      NUMBER: file.slice(numIdx, lastIdx),
      ELEMENT: file,
    }
    modifyFiles.push(obj)
  }
  const sortedFiles = modifyFiles.sort((a, b) => {
    if (a.HEAD.toUpperCase() === b.HEAD.toUpperCase()) {
      return a.NUMBER - b.NUMBER
    }
    if (a.HEAD.toUpperCase() < b.HEAD.toUpperCase()) return -1
  })

  for (const file of sortedFiles) {
    answer.push(file.ELEMENT)
  }

  return answer
}
```

## ⭐️ 해결 과정

slice 함수로 처음 숫자가 나오는 인덱스와 숫자 다음에 숫자가 아닌 값이 나오는 인덱스를 notNumIdx 변수에 담도록 정규식을 이용하여 구하였다.  
여기서 주의할점은 tail에 값이 안담기수도 있으므로 -1일때는 file의 길이를 담아 마지막까지 NUMBER에 담도록 하였다. 여기서 시간을 많이 빼앗겼다..
예를들어 file 에 F-15가 올때, numIdx는 2이지만, notNumIdx는 -1가 되므로 파일 길이만큼 처리를 해줘야 NUMBER에 15가 담긴다.

obj 객체에 HEAD, NUMBER, ELEMENT 키를 담아 modifyFiles 담아준 후 문제에서 주어진대로 정렬시켜주면 끝!

---

### 다른 사람 풀이

```javascript
function solution(files) {
  return files
    .map(file => file.match(/(\D+)(\d+)/))
    .sort((a, b) => {
      const x = a[1].toUpperCase()
      const y = b[1].toUpperCase()
      if (x === y) return a[2] - b[2]
      if (x < y) return -1
      else return 1
    })
    .map(file => file.input)
}
```

정규식표현과 자바스크립트 정렬 함수를 사용하여 해결한 방식이다.

정규식을 사용하여 D+와 d+로 문자일때, 숫자일때 그룹화하는건 동일했지만 match 함수로 리턴된 값으로 바로 sort할 수 있다는게 인상적이였다.

처음에 match함수 내의 D+ 의미는 문자 그룹 1개 이상허용 하는 의미며, d+는 숫자 그룹 1개 이상을 허용하여 각각 데이터를 파싱하였다.  
파싱된 데이터는 다음과 같이 배열형태로 출력이 되는데, 해당 배열의 첫번째 요소는HEAD + NUMBER 를 의미하고 2번째 요소가 HEAD, 3번째 요소가 NUMBER가 된다. input 키에는 file명 자체가 담겨 정렬 이후에 이 input이라는 키로 정렬 시키면 값을 잘 받을 수 있다.

```
[
  'B-50',
  'B-',
  '50',
  index: 0,
  input: 'B-50 Superfortress',
  groups: undefined
]
```

match 함수 이후에 리턴된 값을 콘솔로그를 찍어보면 신기하게 위와같이 리턴해준다.
