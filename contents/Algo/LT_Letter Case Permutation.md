---
date: '2022-12-31'
title: '[LeetCode] - Letter Case Permutation'
categories: ['Algorithm', 'LeetCode']
summary: '[LeetCode] 21 - Letter Case Permutation'
thumbnail: 'images/leetCode.jpeg'
---

## ๐ ๋ด ํ์ด

[โก๏ธ Letter Case Permutation ํ์ด๋ณด๊ธฐ](https://leetcode.com/problems/letter-case-permutation/)

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

## โญ๏ธ ํด๊ฒฐ ๊ณผ์ 

์๋ ฅ๊ฐ ๋ฌธ์์ด์์ ์๋ฌธ์๋ค๋ง ์๋ฌธ์์ ๋๋ฌธ์๋ก ์ด๋ฃจ์ด์ง ๊ฒฝ์ฐ์์๋ฅผ ๋ฐ๋ก ๊ตฌํด์ผ ํ๋๋ฐ, backtracking์ ์ ์ฉํ๊ธฐ ์ ์ ์๋ ฅ๋ฐ์ ๋ฌธ์์ด์ ์๋ฌธ์๋ก ๋ณํํ๋ฉด ์ดํ ๋ก์ง์ ๊ฐ๋จํ๊ฒ ์ฒ๋ฆฌํ  ์ ์๋ค.

์ซ์ ๋๋ ์๋ฌธ์์ผ๋๋ acc ๋ฐฐ์ด์ ํด๋น ๋ฌธ์๋ฅผ ๋ฌด์กฐ๊ฑด ๋์ ์ํค๊ณ , ๋ฐฑํธ๋ํน, ์ด์  ๊ณผ์ ๋ถํฐ ๋ค์ ํ์ํ๊ธฐ ์ํด pop.

ํด๋น ๋ฌธ์๊ฐ ์ซ์๊ฐ ์๋๋ผ๋ฉด ? => ํด๋น ๋ฌธ์๋ฅผ ๋๋ฌธ์๋ก ์นํํ acc๋ฐฐ์ด์ ๋์ ์์ผ ๋ฐฑํธ๋ํน, ์ด์  ๊ณผ์ ๋ถํฐ ๋ค์ ํ์ํ๊ธฐ ์ํด pop.

์ ๋๊ฐ์ง๋ง ๊ณ ๋ คํด์ idx ๊ฐ์ ํ๋์ฉ ์ฆ๊ฐ์ํค๋ฉด ์ํ๋ ๋ต์ ์ป์ด๋ผ ์ ์๋ค.
