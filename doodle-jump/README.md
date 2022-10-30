## :star: Doodle Jump Game

HTML / CSS / Vanilla JS
<br/>

![Doodle Jump](https://user-images.githubusercontent.com/76716519/198864964-c7a41f9b-b5f5-4377-81e5-2006a1325f6f.gif)

<br/>

## 🔨 What I Made

```
  1. How to play 버튼 클릭시 open modal
  2. Start 버튼 클릭시 캐릭터, 플랫폼 Element 생성 및 game start
  3. 플랫폼 이동, 바닥 도착시 score 1 증가 및 새 플랫폼 생성
  4. 캐릭터 점프, 하락, 게임 오버
  5. → : 오른쪽 이동, ← : 왼쪽 이동,  ↑ : 현재 방향 유지
  6. Retry 버튼시 초기화 및 재시작
```

<br/>

## :question: What I Learn

#### 1. JavaScipt: setInterval() / clearInterval()

- `setInterval()`: 일정 시간마다 반복적으로 함수나 코드를 수행하는 함수

  - Parameters
    - `function|code`: 반복적으로 실행할 함수 또는 문자열, 문자열은 보안 위험으로 인해 권장되지 않음
    - `delay(optional)`: 시간 간격(ms), 1s = 1000ms
    - `arg0, …, argN(optional)`: 함수에 전달할 인수, IE9 이하에서는 지원한지 않음

  ```js
  function sayHi(who, phrase) {
  	alert(who + ' 님, ' + phrase);
  }

  setTimeout(sayHi, 1000, '홍길동', '안녕하세요.'); // 홍길동 님, 안녕하세요.
  ```

  참고 [setInterval() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

---

- `clearInterval()`: setInterval()에 의해 실행된 반복 작업을 종료하는 함수

  - Parameters
    - `intervalID `: setInterval() 함수가 리턴한 id

  ```js
  let timerId = setTimeout(...);
  clearTimeout(timerId);
  ```

  참고 [clearInterval() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)
