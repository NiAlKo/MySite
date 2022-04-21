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
	})
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
	document.querySelector("html").classList.add("__touch");
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

function setTheme(nameTheme) {
	const arrayTheme = ["theme-default", "theme-light", "theme-contrast"];
	const selectedThemeBtns = document.querySelectorAll(".theme-" + nameTheme + "-link");
	const themBtns = document.querySelectorAll(".menu__theme .menu__link");

	arrayTheme.forEach((el) => {
		body.classList.remove(el);
	})

	body.classList.add("theme-" + nameTheme);

	themBtns.forEach((el) => {
		el.classList.remove("menu__link--active");
	});

	selectedThemeBtns.forEach((el) => {
		el.classList.add("menu__link--active");
	});
}

window.addEventListener("DOMContentLoaded", function () {
	setTheme("default");
	choosTheme();
});

function choosTheme() {
	const arrayThemeLink = [".theme-default-link", ".theme-light-link", ".theme-contrast-link"];
	const arrayLink = [];
	arrayThemeLink.forEach((el) => {
		document.querySelectorAll(el).forEach((element) => {
			arrayLink.push(element);
		});
	});
	arrayLink.forEach((link) => {
		link.addEventListener("click", (evt) => {
			if (evt.target.matches(".theme-default-link")) {
				setTheme("default");
			} else if (evt.target.matches(".theme-light-link")) {
				setTheme("light");
			} else {
				setTheme("contrast");
			}
		});
	})

}