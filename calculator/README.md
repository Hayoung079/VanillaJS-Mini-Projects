## :star: Calculator

HTML / CSS / Vanilla JS
<br/>

![calculator](https://user-images.githubusercontent.com/76716519/131508136-5144737e-a6e9-4bf4-8006-29d43782f432.gif)

## :question: What I Learn

#### 1. HTML: Data 속성

- 'data-'로 시작하는 사용자 지정 데이터 특성
- value 속성과 관련이 없기 때문에 hidden으로 태그를 숨겨둘 필요없이 데이터를 저장할 수 있다.
- 자바스크립트에서 접근하는 방법은 dataset객체를 통해 data- 뒷 부분을 사용한다.<br/>
  단, 대시들은 camelCase로 변환된다.

```c
<input type="text" id="name" data-value="user01" data-code="c01" data-user-name="Park">
```

```c
const input = document.querySelector('#name');
console.log(input.dataset.value); // user01
console.log(input.dataset.code); // c01
console.log(input.dataset.userName); // Park
```

- IE10 이하 버전은 getAttribute()을 통해 접근해야 한다.

---

#### 2. CSS: Grid

- flex는 한 방향(1차원) 레이아웃 시스템인 반면 grid는 두 방향(2차원) 레이아웃 시스템이다.
- 그리드 컨테이너 : display: grid 를 적용하는 전체 영역
- 그리드 아이템 : 그리드 컨테이너의 자식 요소들
- 그리드 트랙: 그리드의 행(row) 또는 열(column)
- 그리드 셀: 그리드의 한 칸, 그리드 아이템 하나가 들어가는 '가상의 칸'
- 그리드 라인: 그리드 셀을 구분하는 선
- 그리드 번호: 그리드 라인의 각 번호
- 그리드 갭: 그리드 셀 사이의 간격
- 그리드 영역: 그리드 라인으로 둘러싸인 사각형 영역, 그리드 셀의 집합

참고: [CSS Grid-MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout)
[CSS Grid-Blog](https://studiomeal.com/archives/533)

---

#### 3. JavaScript: Class

- class: 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀, 객체를 정의하기 위한 상태(멤버변수)와 메서드(함수)로 구성된다. [위키백과](<https://ko.wikipedia.org/wiki/%ED%81%B4%EB%9E%98%EC%8A%A4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)>)

- new 연산자를 통해 생성

```c
class User {
  // 멤버 변수
  constructor(name) {
    this.name = name;
  }

  // 메서드
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

```

```c
const user = new User("Park");
user.sayHi(); // 'Hi Park'
```

- class로 만든 함수엔 특수 내부 프로퍼티인 `[[FunctionKind]:"classConstructor"]`가 있다.<br/>
  자바스크립트는 함수에 `[[FunctionKind]:"classConstructor"]`이 있는지를 확인하기 때문에 클래스 생성자를 `new`와 함꼐 호출하지 않으면 에러가 발생한다.

참고: [class-모던 자바스크립트](https://ko.javascript.info/class) [class-MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class)

---

#### 4. JavaScript: this

- 일반 함수 안에서 사용하면 window(글로벌 객체)를 의미

```c
console.log(this === window); // true

function x() {
  return this;
}

x() === window; // true
```

- 메서드 안에서 사용하면 메서드를 호출한 객체를 의미

```c
const user {
  name: "Park",
  age: 20,
  drinkWater() {
    console.log(`${this.name} drinks water.`);
  }
}

user.drinkWater(); // 'Park drinks water.'
```

- 생성자(constructor) 안에서 사용하면 그 생성자로 새로 생성되는 객체를 의미

```c
 function Person() {
    this.name = "Park",
    this.age = 20,
    this.drink = function() {
      console.log(`${this.name} drinks water.`);
    }
  }
 const person1 = new Person();
 console.log(person1); // Person { name: "Park", age: 20, drink: f}
```

- 이벤트 리스너 안에서 사용하면 event.target(이벤트를 발생시킨 요소)과 일치

```c
<button id="button">버튼</button>
  <script>
    document.getElementByI("button").addEventListene("click", function (e) {
      console.log(e.target);
      //<button id="button">버튼<button>
      console.log(this);
      //<button id="button">버튼<button>
    });
  </script>
```

참고: [this-MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
