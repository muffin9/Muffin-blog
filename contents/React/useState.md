---
date: '2022-01-10'
title: '[React] - useState'
categories: ['React', 'useState']
summary: 'React Hooks의 useState 너 정확하게 어떻게 동작하니?'
thumbnail: 'images/ReactHooks.png'
---

## useState Hooks ?

```javascript
import React, { useState } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

React Hooks에서 가장 많이 사용되어지는 이 useState. 위 에제는 리액트 공식문서에서 가져온 예이며, useState에는 상태의 기본값을 파라미터로 넣어서 호출하면 배열형태로 반환하는데 => 첫번째 값은 해당 상태, 두번째 값은 해당 상태를 변경하는 Setter 함수다.

먼저 상태관리를 하는데 있어서 이전의 상태를 기억하고 있어야 하기 때문에, React Hooks는 이를 클로저를 통해 해결한다고 알고는 있었는데, 내부적으로 정확하게 어떤식으로 돌아가는지는 모르고 있어서 이번에 제대로 정리하고자 useState를 파헤쳐보았다.

### 우선 클로저란?

클로저는 자바스크립트의 고유 개념이 아닌 다른 언어에서도 사용되어지는 개념인데, 자바스크립트 언어 기준으로 보았을때 특정 함수가 속한 자신의 렉시컬 스코프를 기억하여 해당 렉시컬 스코프 밖에서 실행이 될때에도 이 스코프에 접근할 수 있는 개념이다.

```javascript
function outer() {
  const name = 'muffin'
  const inner = function () {
    console.log(name)
  }
  return inner
}

outer()() // 'muffin'
```

위 코드처럼 이미 상위함수가 종료가 되어도 내부 함수에서 상위 함수의 스코프 변수에 접근할 수 있도록 클로저가 적용된 사례다. inner 함수에서 이미 종료된 outer의 변수 name에 접근할 수 있는 이유는 ?

이미 실행컨텍스트 큐에서 상위 함수 컨텍스트 정보가 리턴이 되었더라도 상위함수의 내부 함수가 남아 있다면 => 이 내부 함수는 이미 리턴된 상위함수 컨텍스트 정보를 참조할 수 있기 떄문이다.

`useState` 또한 위 클로저 개념을 빌려와 응용한것이다.

리액트는 useState를 통해 선언된 상태들은 useState 바깥쪽에 저장한다. 이 바깥쪽에 저장된 state는 유일한 키로 접근할 수 있으며 `순서대로` 배열형식으로 저장이 된다.

정확히 이 선언된 상태들이 바깥쪽 어디에 저장되는 걸까 ?

```javascript
const ReactCurrentDispatcher = {
  current: null,
}

export default ReactCurrentDispatcher
```

useState Hook의 ReactCurrentDispatcher.js 모듈에서의 모습인데 달랑 current 키가 하나만 있는 하나의 객체 형태다. 요것이 전역에 선언된 current라는 값을 담은 변수이다.

즉, 핵심은 useState의 리턴 값의 출처가 전역에서 온다는 점인데, 리액트가 실제로 클로저를 활용해 함수 외부의 값에 접근하는 사실을 알 수 있다.  
함수형 컴포넌트에서 상태값을 변경하면 외부의 값이 변경되고, 리렌더링(=함수 재호출)을 통해 새로운 값을 받아오게 된다.

이처럼 상태들이 순서대로 저장되기 때문에 useState같은 Hooks를 컴포넌트 최상단에 써야 하는 이유가 바로 이것이다. 만약 반복문이나 컴포넌트 특정 함수 내에서 선언하게 된다면 맨 처음에 useState가 순서대로 맞춘것과 순서가 바뀔수 있기 때문에 무한 루프 현상을 겪거나 예상한 값과는 다른 값을 참조하게 되버린다.

## useState 만들어보기

```javascript
// customUseState.js
import App from './App'
import { root } from './index'

const customUseState = {
  states: [],
  idx: 0,
  useState: function (initValue) {
    if (this.idx === this.states.length) {
      const state = {
        value: initValue,
        setState(newValue) {
          state.value = newValue
          customUseState.idx = 0
          root.render(<App />)
        },
      }

      this.states.push(state)
    }

    const currentState = this.states[this.idx]

    return [currentState.value, currentState.setState]
  },
}

export default customUseState

// App.js

import customUseState from "./customUseState";

function App() {
  const [count, setCount] = customUseState.useState(0);

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>PLUS</button>
        <button onClick={() => setCount(count - 1)}>MINUS</button>
      </div>
    </div>
  );
}

export default App;

```

useState와 관련된 내용을 정리하고 직접 만들어보며 리액트 내에서 hook을 최상위 레벨에서 사용하지 않는다면 에러를 뿜는 이유를 이제 정확히 알아가게 되었다.

### 출처

1. https://yeoulcoding.tistory.com/149
2. https://reactjs.org/docs/hooks-state.html
3. https://goidle.github.io/react/in-depth-react-hooks_1/
