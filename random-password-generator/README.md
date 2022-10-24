## :star: Random Password Generator

HTML / CSS / Vanilla JS
<br/>

![random-password](https://user-images.githubusercontent.com/76716519/132008821-cb36f513-d0ee-43e2-89b7-a373a9307b69.gif)

## 🔨 What I Made

```
  1. 알파벳 소문자/대문자, 숫자0~9, 특수기호(!@#$%^&*()_+?<>:{}[])를 포함한 문자열 생성
  2. 비밀번호의 길이 `12`만큼 반복하면서
  3. 문자열에서 랜덤하 숫자의 인덱스를 추출
  4. 빈 문자열인 비밀번호에 추출된 문자 추가
  5. copy 버튼 클릭시, document.exeCommand('copy') 사용
```

## :question: What I Learn

#### 1. JS: select() 메서드

- textarea 나 input과 같은 form 엘리먼트에서만 사용할 수 있음
- 요소의 모든 텍스트를 선택

#### 2. JS: document.exeCommand() 메서드

- 클립보드와 상호작용하는데 널리 사용되는 메서드
- Document.execCommand('copy')를 사용하여 텍스트를 클립 보드에 복사
- Document.execCommand('cut')를 사용하여 텍스트를 잘라내어 클립 보드에 추가
- Document.execCommand('paste')를 사용하여 클립 보드에 이미있는 내용을 붙여 넣기
- select() 와 함께 setSelectionRange() 메소드로 선택 영역을 직접 지정해주면 ios, safari에서 동작
- ❗ document.execCommand() 함수는 현재 정상적으로 동작은 하지만 웹 표준에서 `Deprecated` 되었기 때문에 공식문서에서도 사용되지 않으며, 대체 방법으로 Clipboard API 사용이 권장되고 있다.

#### 3. Clipboard API

- [Clipboard API](https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API)는 클립 보드에 내용을 복사하고 붙여 넣을 수있는 비동기 읽기 및 쓰기 작업을 제공
- navigator.clipboard개체 내에서 사용
  - `navigator.clipboard.writeText()`: 복사
  - `navigator.clipboard.readText()`: 붙여넣기
- Safari 13.1 버전부터 https 환경에서만 지원

#### 4. clipboard.js

- [clipboard.js](https://clipboardjs.com/) 라이브러리
  - `<button>`의 `data-clipboard-target` 속성 값으로 복사될 텍스트가 있는 `<input>` 또는 `<textArea>`의 `id`를 입력하거나 복사할 텍스트를 직접 입력하여 사용

```html
<body>
	<textarea id="textArea">클립보드 복사</textarea>
	<button class="btn" data-clipboard-target="#textArea">Copy</button>

	<!-- clipboard.js cdn -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js"></script>

	<script>
		var clipboard = new ClipboardJS('.btn');

		clipboard.on('success', function (e) {
			console.log(e);
		});

		clipboard.on('error', function (e) {
			console.log(e);
		});
	</script>
</body>
```

---

#### 4. UI: Neumorphism (뉴모피즘)

- new(새로운)와 skeuomorphism(스큐어모피즘)의 합성어. 즉 새로운 스큐어모피즘
- 객체(Object)와 배경간의 구분을 오직 그림자로 함으로 볼륨감 있고 생생하게 살아있는 듯한 느낌을 받게하는 디자인
- [Neumorphism.io](https://neumorphism.io/)
