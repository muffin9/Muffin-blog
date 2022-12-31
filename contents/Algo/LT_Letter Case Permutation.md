---
date: '2022-12-31'
title: '[LeetCode] - Letter Case Permutation'
categories: ['Algorithm', 'LeetCode']
summary: '[LeetCode] 21 - Letter Case Permutation'
thumbnail: 'images/leetCode.jpeg'
---

## 📜 내 풀이

[➡️ Letter Case Permutation 풀어보기](https://leetcode.com/problems/letter-case-permutation/)

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const answer = []
  s = s.toLowerCase()

  const backtracking = (idx, acc) => {
    if (acc.length === s.length) {
      answer.push(acc.join(''))
      return
    }

    acc.push(s[idx])
    backtracking(idx + 1, acc)
    acc.pop()

    if (isNaN(s[idx])) {
      acc.push(s[idx].toUpperCase())
      backtracking(idx + 1, acc)
      acc.pop()
    }
  }

  backtracking(0, [])
  return answer
}
```

## ⭐️ 해결 과정

입력값 문자열에서 영문자들만 소문자와 대문자로 이루어진 경우의수를 따로 구해야 하는데, backtracking을 적용하기 전에 입력받은 문자열을 소문자로 변환하면 이후 로직을 간단하게 처리할 수 있다.

숫자 또는 소문자일때는 acc 배열에 해당 문자를 무조건 누적시키고, 백트래킹, 이전 과정부터 다시 탐색하기 위해 pop.

해당 문자가 숫자가 아니라면 ? => 해당 문자를 대문자로 치환후 acc배열에 누적시켜 백트래킹, 이전 과정부터 다시 탐색하기 위해 pop.

위 두가지만 고려해서 idx 값을 하나씩 증가시키면 원하는 답을 얻어낼 수 있다.
