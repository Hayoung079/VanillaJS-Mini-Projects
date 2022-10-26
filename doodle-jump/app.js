// DOM
const grid = document.querySelector('.grid');
const doodler = document.createElement('div');

// Variables
let doodlerLeftSpace = 50;
let doodlerBottomSpace = 150;
let isGameOver = false;
let platformCount = 5;
let platforms = [];

// Create Character
function createDoodler() {
	grid.appendChild(doodler);
	doodler.classList.add('doodler');
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

// Start
function start() {
	if (!isGameOver) {
		createDoodler();
		createPlatforms();
		setInterval(movePlatforms, 30);
	}
}
start();
