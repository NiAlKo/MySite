// Burger menu
const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");
const arrayMenuElement = [burger, menu, menuBody];

burger.addEventListener("click", function () {
	toggleClass("__active");
	body.classList.toggle("__lock");
});

function toggleClass(className) {
	arrayMenuElement.forEach((el) => {
		el.classList.toggle(className);
	});
}

window.addEventListener("scroll", () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 991.98) {
		document.querySelectorAll("section").forEach((el, i) => {
			if (el.offsetTop - document.querySelector(".menu__nav").clientHeight <= scrollDistance) {
				document.querySelectorAll(".menu__nav a").forEach((el) => {
					if (el.classList.contains("__link--active")) {
						el.classList.remove("__link--active");
					}
				});
				document.querySelectorAll(".menu__nav li")[i].querySelector("a").classList.add("__link--active");
			}
		});
	}
});

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
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};

if (isMobile.any()) {
	menuBody.classList.add("__mobail");
	document.querySelector(".__link--active").classList.add("__mobail");
	document.querySelectorAll(".menu__nav .menu__link").forEach((el) => {
		el.classList.add("__mobail");
	});

	document.addEventListener("click", function (evt) {
		if (evt.target.matches(".menu__link.__mobail") || evt.target.matches("body.__lock")) {
			toggleClass("__active");
			body.classList.toggle("__lock");
		}
	});
}