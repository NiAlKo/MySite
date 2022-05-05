// Burger menu
const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");
const arrayMenuElement = [burger, menu, menuBody];

burger.addEventListener("click", function () {
	toggleClass(arrayMenuElement, "__active");
	body.classList.toggle("__lock");
});

function toggleClass(array, className, type) {
	if (type === "kill") {
		array.forEach((el) => {
			el.classList.remove(className);
		});
	} else if (type === "add") {
		array.forEach((el) => {
			el.classList.add(className);
		});
	} else {
		array.forEach((el) => {
			el.classList.toggle(className);
		});
	}
}


document.addEventListener("click", function (evt) {
	if (menuBody.matches(".__active")) {
		if (evt.target.matches(".menu__link.__mobail") || evt.target.matches("body.__lock")) {
			toggleClass(arrayMenuElement, "__active");
			body.classList.toggle("__lock");
		}
	}
});

window.addEventListener("scroll", () => {
	activePoint('section', '.menu__nav', '.menu__link', '__link--active');
});

function activePoint(element, classNameItem, classNameItemLink, activeLink) {
	let scrollDistance = window.scrollY;
	const sectionTeg = document.querySelectorAll(element);
	const NameItem = document.querySelector(classNameItem);
	const allItemLink = NameItem.querySelectorAll(classNameItemLink);
	const allItemList = NameItem.querySelectorAll('li');

	sectionTeg.forEach((el, i) => {
		if (el.offsetTop - NameItem.clientHeight <= scrollDistance) {
			allItemLink.forEach((el) => {
				if (el.classList.contains(activeLink)) {
					el.classList.remove(activeLink);
				}
			});
			allItemList[i].querySelector('a').classList.add(activeLink);
		}
	});
}

// Обнаружение мобильного
let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
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
	if (window.innerWidth < 991.98) {
		mobail = true;
	} else {
		mobail = false;
	}
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


