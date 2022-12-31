---
date: '2022-12-30'
title: '[LeetCode] - Letter Combinations of a Phone Number'
categories: ['Algorithm', 'LeetCode']
summary: '[LeetCode] 21 - Letter Combinations of a Phone Number'
thumbnail: './default.png'
---

## 📜 내 풀이

[➡️ Letter Combinations of a Phone Number 풀어보기](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const numberObj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const answer = []
  const possibleValues = digits.split('').map(v => numberObj[v])

  const calculateCombination = (start, acc) => {
    if (digits.length === acc.length) {
      answer.push(acc.join(''))
      return
    }

    for (let i = start; i < possibleValues.length; i++) {
      for (let j = 0; j < possibleValues[i].length; j++) {
        acc.push(possibleValues[i][j])
        calculateCombination(i + 1, acc)
        acc.pop()
      }
    }
  }

  calculateCombination(0, [])
  return answer
}
```

## ⭐️ 해결 과정

각 숫자에 적힌 영문자를 모두 조합하여야 하기 때문에 백트래킹 기법을 사용하면 된다고 생각했다.

오랜만에 백트래킹 기법 문제를 접하다보니 for문 로직을 작성하는데 시간이 좀 소모되었다..

제일 먼저 possibleValues엔 2차원 배열로 문제에서 주어진 digits 문자를 배열로 변환후 가능한 수들을 배치하였다.

만약 digits 가 “23” 일 때? ⇒ possibleValues : [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ] 형태로 변환시켜 주었음.

calculateCombination 함수로 인덱스를 체킹하는 변수 start, 누적 배열 변수 acc를 받아 백트래킹 로직을 구현하였는ㄴ데, 종료 조건은 누적된 배열내의 값이 digits의 길이가 될 때로, 그게 아니라면 이중 for문 내에서 push, pop을 통해 모든 문자들을 조합하였다. answer에 누적된 값들은 따로 정렬 조건이 없으니 그대로 리턴시켰다.
