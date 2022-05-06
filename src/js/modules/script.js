// Burger menu
const burger = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
const ButtonReset = document.querySelector('#custom-select-btn');
const arrayMenuElement = [burger, menu, menuBody];

burger.addEventListener('click', function () {
	toggleClass(arrayMenuElement, '__active');
	body.classList.toggle('__lock');
});

function toggleClass(array, className, type) {
	if (type === 'kill') {
		array.forEach((el) => {
			el.classList.remove(className);
		});
	} else if (type === 'add') {
		array.forEach((el) => {
			el.classList.add(className);
		});
	} else {
		array.forEach((el) => {
			el.classList.toggle(className);
		});
	}
}


document.addEventListener('click', function (evt) {
	if (menuBody.matches('.__active')) {
		if (evt.target.matches('.menu__link.__mobail') || evt.target.matches('body.__lock')) {
			toggleClass(arrayMenuElement, '__active');
			body.classList.toggle('__lock');
		}
	}
	const { type } = evt.target.dataset;
	if (type === 'select-item') {
		ButtonReset.style.display = 'block';
	}
});

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	document.querySelectorAll('section').forEach((el, i) => {
		if (el.offsetTop - document.querySelector('.menu__nav').clientHeight <= scrollDistance) {
			document.querySelectorAll('.menu__nav a').forEach((el) => {
				if (el.classList.contains('__link--active')) {
					el.classList.remove('__link--active');
				}
			});
			document.querySelectorAll('.menu__nav li')[i].querySelector('a').classList.add('__link--active');
		}
	});
});

// Обнаружение мобильного
let isMobile = {
	Android: () => {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: () => {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: () => {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: () => {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: () => {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: () => {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

const activeLink = document.querySelectorAll('.__link--active');
const menuLogo = document.querySelector('.menu__logo');
const navigationLink = document.querySelectorAll('.menu__nav .menu__link');
let mobail = false;

window.addEventListener('resize', function () {
	(window.innerWidth < 991.98) ? mobail = true : mobail = false;

	phoneMode(mobail);
});

if (isMobile.any()) {
	mobail = true;
	phoneMode(mobail);
}

function phoneMode(mobail) {
	if (mobail == true) {
		menuBody.classList.add('__mobail');
		activeLink.forEach((el) => {
			el.classList.remove('__link--active');
		});
		menuLogo.classList.add('__mobail', '__link--active');
		toggleClass(navigationLink, '__mobail', 'add');
	} else {
		menuLogo.classList.remove('__mobail');
		menuBody.classList.remove('__mobail');
		toggleClass(navigationLink, '__mobail', 'kill');
	}
}


