// hex 색상 코드
const hex = [0, 1, 2, 3, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// DOM
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Event
btn.addEventListener('click', function () {
	// hexColor 생성: # + 6자리
	let hexColor = '#';
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}

	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});

// 랜덤 숫자(인덱스) 생성
function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}
