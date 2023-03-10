---
date: '2022-12-30'
title: '[LeetCode] - Letter Combinations of a Phone Number'
categories: ['Algorithm', 'LeetCode']
summary: '[LeetCode] 21 - Letter Combinations of a Phone Number'
thumbnail: 'images/leetCode.jpeg'
---

## ๐ ๋ด ํ์ด

[โก๏ธ Letter Combinations of a Phone Number ํ์ด๋ณด๊ธฐ](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)

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

## โญ๏ธ ํด๊ฒฐ ๊ณผ์ 

๊ฐ ์ซ์์ ์ ํ ์๋ฌธ์๋ฅผ ๋ชจ๋ ์กฐํฉํ์ฌ์ผ ํ๊ธฐ ๋๋ฌธ์ ๋ฐฑํธ๋ํน ๊ธฐ๋ฒ์ ์ฌ์ฉํ๋ฉด ๋๋ค๊ณ  ์๊ฐํ๋ค.

์ค๋๋ง์ ๋ฐฑํธ๋ํน ๊ธฐ๋ฒ ๋ฌธ์ ๋ฅผ ์ ํ๋ค๋ณด๋ for๋ฌธ ๋ก์ง์ ์์ฑํ๋๋ฐ ์๊ฐ์ด ์ข ์๋ชจ๋์๋ค..

์ ์ผ ๋จผ์  possibleValues์ 2์ฐจ์ ๋ฐฐ์ด๋ก ๋ฌธ์ ์์ ์ฃผ์ด์ง digits ๋ฌธ์๋ฅผ ๋ฐฐ์ด๋ก ๋ณํํ ๊ฐ๋ฅํ ์๋ค์ ๋ฐฐ์นํ์๋ค.

๋ง์ฝ digits ๊ฐ โ23โ ์ผ ๋? โ possibleValues : [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ] ํํ๋ก ๋ณํ์์ผ ์ฃผ์์.

calculateCombination ํจ์๋ก ์ธ๋ฑ์ค๋ฅผ ์ฒดํนํ๋ ๋ณ์ start, ๋์  ๋ฐฐ์ด ๋ณ์ acc๋ฅผ ๋ฐ์ ๋ฐฑํธ๋ํน ๋ก์ง์ ๊ตฌํํ์๋ใด๋ฐ, ์ข๋ฃ ์กฐ๊ฑด์ ๋์ ๋ ๋ฐฐ์ด๋ด์ ๊ฐ์ด digits์ ๊ธธ์ด๊ฐ ๋  ๋๋ก, ๊ทธ๊ฒ ์๋๋ผ๋ฉด ์ด์ค for๋ฌธ ๋ด์์ push, pop์ ํตํด ๋ชจ๋  ๋ฌธ์๋ค์ ์กฐํฉํ์๋ค. answer์ ๋์ ๋ ๊ฐ๋ค์ ๋ฐ๋ก ์ ๋ ฌ ์กฐ๊ฑด์ด ์์ผ๋ ๊ทธ๋๋ก ๋ฆฌํด์์ผฐ๋ค.
