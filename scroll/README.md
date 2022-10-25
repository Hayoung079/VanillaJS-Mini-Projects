## :star: Scroll

HTML / CSS / Vanilla JS
<br/>

![scroll](https://user-images.githubusercontent.com/76716519/197827275-66f4fe9a-423c-4f64-875f-addadab74c3a.gif)

## 🔨 What I Made

```
	1. navbar 햄버거 버튼 클릭시 links의 높이를 측정하여 자동을 높이만큼 container 생성
	2. 스크롤 아래로 내리면 navbar 상단에 고정 및 top link button 생성
	3. link 클릭시 해당 section의 위치로 scroll
```

<br/>

## :question: What I Learn

#### 1. JavaScript: Element.getBoundingClientRect()

- 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 `DOMRect` 객체를 반환
  - DOMRect: `left, top, right, bottom, x, y, width, height` 프로퍼티
  - width와 height 프로퍼티는 콘텐츠의 width/height뿐만 아니라 padding과 border-width도 포함

참고 [getBoundingClientRect() - MDN](https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect)

---

#### 2. JavaScript: window scroll

- `window 객체`: 브라우저의 요소들과 자바스크립트 엔진, 모든 변수를 담고 있는 객체
- `window.scrollY`
  - 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환(수평 스크롤은 `scrollX`)
  - 양의 값이 위쪽 스크롤을 의미, 문서가 위나 아래로 전혀 움직이지 않은 상태면 0을 반환
- `window.scrollTo((x-좌표, y-좌표)`: 지정된 위치로 스크롤

참고 [window.scrollY - MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY), [window.scrollTo() - MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/scrollTo)

---
