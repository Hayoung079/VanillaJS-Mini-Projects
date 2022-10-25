## :star: Menu

HTML / CSS / Vanilla JS
<br/>

![Menu](https://user-images.githubusercontent.com/76716519/197537546-c695e41c-8fe1-4e57-ad23-a78818d8834e.gif)

<br/>

## 🔨 What I Made

```
  1. hex color 소스 배열 생성
  2. Math.random()과 Math.floor()을 사용하여 랜덤한 인덱스 값 생성
  3. 버튼 클릭시, for문으로 랜덤한 hex color #포함 6자리 생성
  4. 생성된 hex color로 배경색 및 text변경
```

## :question: What I Learn

#### 1. JavaScript: 배열 함수 map()

- 배열 내 모든 요소 각각에 대하여 callback 함수를 호출한 결과를 모아 새로운 배열을 반환

```js
  arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

- Parameters
  - `callback function`
    1. currentValue: 처리할 현재 요소
    2. index(Optional): 현재 요소의 인덱스
    3. array(Optional): map()을 호출한 배열
  - `thisArg(Optional)`
    - callback을 실행할 때 this로 사용되는 값

참고: [map()-MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

#### 2. JavaScript: 배열 함수 filter()

- callback 함수의 조건을 만족하는(true를 반환하는) 모든 요소를 모아 새로운 배열 반환

```js
   arr.filter(callback(element[, index[, array]])[, thisArg])
```

- Parameters
  - `callback function`
    1. element: 처리할 현재 요소
    2. index(Optional): 현재 요소의 인덱스
    3. array(Optional): filter()을 호출한 배열
  - `thisArg(Optional)`
    - callback을 실행할 때 this로 사용되는 값

참고: [filter()-MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

#### 3. JavaScript: 배열 함수 reduce()

- 배열의 각 요소를 순회하며 callback함수(reducer)의 실행 값을 누적하여 하나의 결과값을 반환

```javaSceipt
arr.reduce(callback[, initialValue])
```

- Parameters

  - `callback function`

    1. accumulator: callback함수의 반환값을 누적
    2. currentValue: 배열의 현재 요소
    3. index(Optional): 배열의 현재 요소의 인덱스
    4. array(Optional): 호출한 배열

  - `initialValue(Optional)`
    - 최초 callback함수 실행 시 accumulator 인수에 제공되는 값
    - 초기값을 제공하지 않을 경우 배열의 첫 번째 요소를 사용하고, 빈 배열에서 초기값이 없을 경우 에러 발생

참고: [reduce()-MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
