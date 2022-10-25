// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// DOM
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');

// toggle links
navToggle.addEventListener('click', function () {
	// get links container heigth
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;

	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

// fixed navbar
window.addEventListener('scroll', function () {
	const scrollHeight = window.scrollY;
	const navHeight = navbar.getBoundingClientRect().height;

	if (scrollHeight > navHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}

	if (scrollHeight > 500) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});

// smooth scroll
scrollLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		// navigate to specific spot
		const id = e.currentTarget.getAttribute('href').slice(1);
		const element = document.getElementById(id);

		// calculate the heights
		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const isNavFixed = navbar.classList.contains('fixed-nav');

		let position = element.offsetTop - navHeight;
		if (!isNavFixed) {
			position = position - navHeight;
		}
		if (navHeight > 82) {
			position = position + containerHeight;
		}

		window.scrollTo({ left: 0, top: position });
		linksContainer.style.height = 0;
	});
});
