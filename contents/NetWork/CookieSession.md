---
date: '2022-01-09'
title: '[NetWork] - Cookie & Session'
categories: ['Session', 'Cookie']
summary: 'Cookie와 Session 가 무엇이고 언제 사용할까?'
thumbnail: 'images/cookieAndSession.png'
---

## Cookie와 Session 왜 사용하는가?

쿠키와 세션에대해 알아가기전에 HTTP의 특징이 비연결성과 무상태의 특징을 가지는데 그 이유는 서버의 부담을 줄이기 위한다는걸 알고 가자.

그래서 이렇게 비연결성과 무상태의 HTTP 특징의 대안으로 쿠키와 세션을 사용하여 많은 사용자를 구분하게 된다.

그럼 쿠키와 세션이 어떻게 이루어지는지 살펴보자.

### Cookie

쿠키는 클라이언트에 저장되는 key & value 형태로 이루어져있으며 클라이언트에 저장되어 서버에 요청할 때마다 헤더에 쿠키를 담아 서버에 전송한다.

가장 큰 장점으론 클라이언트에서 저장하고 있기 때문에 서버의 저장공간이 절약된다는 점이다. 추가적으로 서버에서 쿠키의 httpOnly 옵션을 설정하면 XSS(사이트 간 악성 Js 코드를 심는 행위) 공격으로부터 안전하다.

`쿠키의 구성요소`

key - 각각의 쿠키를 구별하는 데 사용되는 이름  
value - 쿠키의 이름과 관련된 값  
expires - 쿠키의 만료시간  
domain - 쿠키를 전송할 도메인  
path - 쿠키를 전송할 요청 경로

`쿠키의 동작 방식 - Web 기준`

1. 브라우저에서 서버에게 요청
2. 서버에서 쿠키를 생성하여 HTTP 헤더에 쿠키를 포함 시켜 응답
3. 응답을 받은 브라우저는 종료가되더라도 쿠키 만료 기간이 있다면 클라이언트에서 보관
4. 같은 요청을 할 경우 HTTP 헤더에 쿠키를 함께 보낸다.

하지만 이런 쿠키는 여러 단점이 존재하는데, 쿠키의 크기가 클 경우 네트워크 부하가 커져 브라우저에서 부담이 될 수 있으며 클라이언트가 수정할 수도 있고 해커가 탈취할 수도 있기 때문에 보안에 취약하다. 이번에 새로 알게된 내요인데, 웹 브라우저마다 지원 형태도 다르다고 한다.

### Cookie가 사용되는 예시

악의적으로 조작되거나 가로채더라도 큰 지장이 없는 수준의 정보들을 저장하기 위해 사용된다.

1. 장바구니 기능
2. 팝업창 - 일주일간 다시 보지 않기
3. 로그인 유지

### Session

세션은 쿠키를 기반으로 이루어져 있지만, 서버에서 관리한다. 동작방식은 고유한 SessionID 생성 후 클라이언트에 SessionID를 전송한다. 이후에 클라이언트에서 서버에 다시 요청시 이 SessionID로 서버는 어떤 클라이언트의 요청인지 구분한다.

장점은 브라우저를 닫거나, 서버에서 세션을 삭제했을 때 삭제되므로, 쿠키보다 보안이 좋다. 예전에는 로그인 같이 보안상 중요한 작업을 수행할 때 사용했지만.. 사용자의 수 만큼 서버 메모리를 차지하기 때문에 요즘에는 많은 서비스들이 토큰 기반의 인증방식인 JWT를 사용한다.

단점은 아무래도 세션 ID자체를 서버에서 관리하다보니 사용자가 많아지면 서버에 부담이 된다는점.

`세션의 동작 방식`

1. 클라이언트가 서버에 접속 시 세션 ID를 발급
2. 클라이언트는 서버에 요청할 때, 이 쿠키의 세션 ID를 같이 서버에 요청
3. 서버는 세션 ID로 관리하는 클라이언트 정보를 가져와서 필요한 요청들을 작업후 다시 응답

### Cookie vs Session 차이 간단 정리

1. 사용자의 정보가 저장되는 위치. `쿠키 - 클라이언트 / 세션 - 서버`
2. 요청속도 쿠키 > 세션 (세션은 서버의 처리가 필요)
3. 보안 세션 > 쿠키
4. 용량제한 쿠키는 도메인당 20개 / 1쿠키당 4KB, 세션은 제한이 없다.
5. 브라우저가 종료되면 만료시간에 상관없이 세션은 사라진다.

## LocalStorage & SessionStorage

window 객체의 프로퍼티로 존재하는 LocalStorage & SessionStorage는 브라우저 내에서 key-value 쌍으로 관리한다. 앞서 학습한 쿠키를 사용하면 되는데 이 두가지는 언제 사용할까 ??

1. 쿠키와 다르게 네트워크 요청 시 서버로 전송되지 않는다는 점에서 클라이언트에서만 관리하는 데이터일때 유용하게 사용할 수 있다.
2. 쿠키보다 더 많은 정보들을 보관할 수가 있다. (Web Storage - 5MB정도의 저장공간)

로컬 스토리지 - 지속적으로 필요한 데이터 저장이 필요할 때 (브라우저를 종료하고 다시 브라우저를 켜도 남아있으며, 다른 창을 통해서도 접근이 가능)

세션 스토리지 - 브라우저간 세션 기간동안만 사용이 가능하며 창을 닫을때 삭제된다. 대표적인 사용 예로는 입력폼, 비로그인 장바구니가 있는데, 만약 입력폼에서 내용을 입력하다가 실수로 새로고침을 할 때 입력폼을 다시 불러오면 입력폼이 유지되니 사용자 입장에서 굉장히 편해진다.

### Web Storage 특징

1. 같은 "오리진"내에서만 액세스 가능하다. => URL 체계, 호스트 등 도메인, 포트가 동일해야한다.
2. 키와 값은 무조건 문자열로 변환되어 저장되어지기 떄문에, 객체를 읽고 쓰려면 JSON.stringify, JSON.parse를 사용해야 한다.

참고 출처 : https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-%EC%BF%A0%ED%82%A4-%EC%84%B8%EC%85%98-%EC%A0%95%EB%A6%AC#%EB%B9%84%EC%97%B0%EA%B2%B0%EC%84%B1(Connectionless)%EA%B3%BC_%EB%B9%84%EC%83%81%ED%83%9C%EC%84%B1(Stateless)