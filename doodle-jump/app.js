// DOM
const grid = document.querySelector('.grid');
const doodler = document.createElement('div');

// Variables
let isGameOver = false;
let isJumping = true;
let isGoingLeft = false;
let isGoingRight = false;
let score = 0;
let platforms = [];
let platformCount = 5;
let speed = 3;
const gravity = 0.9;
let startPoint = 150;
let doodlerLeftSpace = 50;
let doodlerBottomSpace = startPoint;
let upTimerId;
let downTimerId;
let leftTimerId;
let rightTimerId;

// Create Character
function createDoodler() {
	grid.appendChild(doodler);
	doodler.classList.add('doodler');
	doodlerLeftSpace = platforms[0].left;
	doodler.style.left = doodlerLeftSpace + 'px';
	doodler.style.bottom = doodlerBottomSpace + 'px';
}

class Platform {
	constructor(newplatBottom) {
		// platform position
		this.bottom = newplatBottom;
		this.left = Math.random() * 315;

		// platform element
		this.visual = document.createElement('div');

		const visual = this.visual;
		visual.classList.add('platform');
		visual.style.left = this.left + 'px';
		visual.style.bottom = this.bottom + 'px';
		grid.appendChild(visual);
	}
}

// Create Platforms
function createPlatforms() {
	for (let i = 0; i < platformCount; i++) {
		let platGap = 600 / platformCount;
		let newplatBottom = 100 + i * platGap;
		let newPlatform = new Platform(newplatBottom);
		platforms.push(newPlatform);
	}
}

// Move Platforms
function movePlatforms() {
	if (doodlerBottomSpace > 200) {
		platforms.forEach((platform) => {
			platform.bottom -= 4;
			let visual = platform.visual;
			visual.style.bottom = platform.bottom + 'px';
		});
	}
}

// Jump Doodler
function jump() {
	clearInterval(downTimerId);
	upTimerId = setInterval(function () {
		doodlerBottomSpace += 20;
		doodler.style.bottom = doodlerBottomSpace + 'px';
		if (doodlerBottomSpace > startPoint + 200) {
			fall();
			isJumping = false;
		}
	}, 30);
}

// Fall Doodler
function fall() {
	clearInterval(upTimerId);
	downTimerId = setInterval(function () {
		doodlerBottomSpace -= 5;
		doodler.style.bottom = doodlerBottomSpace + 'px';
		if (doodlerBottomSpace <= 0) {
			gameOver();
		}
		// platform에 닿으면 다시 jump
		platforms.forEach((platform) => {
			if (
				doodlerBottomSpace >= platform.bottom &&
				doodlerBottomSpace <= platform.bottom + 15 &&
				doodlerLeftSpace + 60 >= platform.left &&
				doodlerLeftSpace <= platform.left + 85 &&
				!isJumping
			) {
				startPoint = doodlerBottomSpace;
				jump();
			}
		});
	}, 20);
}

// GameOver
function gameOver() {
	console.log('game over');
	isGameOver = true;
	clearInterval(upTimerId);
	clearInterval(downTimerId);
}

// Move left
function moveLeft() {
	if (isGoingRight) {
		clearInterval(rightTimerId);
		isGoingRight = false;
	}
	isGoingLeft = true;
	leftTimerId = setInterval(function () {
		if (doodlerLeftSpace >= 0) {
			doodlerLeftSpace -= 5;
			doodler.style.left = doodlerLeftSpace + 'px';
		} else {
			moveRight();
		}
	}, 20);
}

// Move right
function moveRight() {
	if (isGoingLeft) {
		clearInterval(leftTimerId);
		isGoingLeft = false;
	}
	isGoingRight = true;
	rightTimerId = setInterval(function () {
		if (doodlerLeftSpace <= 340) {
			doodlerLeftSpace += 5;
			doodler.style.left = doodlerLeftSpace + 'px';
		} else {
			moveLeft();
		}
	}, 20);
}

// Move straight
function moveStraight() {
	isGoingLeft = false;
	isGoingRight = false;
	clearInterval(leftTimerId);
	clearInterval(rightTimerId);
}

// Control
function control(e) {
	doodler.style.bottom = doodlerBottomSpace + 'px';
	if (e.key === 'ArrowLeft') {
		moveLeft();
	} else if (e.key === 'ArrowRight') {
		moveRight();
	} else if (e.key === 'ArrowUp') {
		moveStraight();
	}
}

// Start
function start() {
	if (!isGameOver) {
		createPlatforms();
		createDoodler();
		setInterval(movePlatforms, 30);
		jump();
		document.addEventListener('keyup', control);
	}
}
start();
