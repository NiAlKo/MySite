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

window.addEventListener("resize", function () {
	if (window.innerWidth < 991.98) {
		menuBody.classList.add("__mobail");
		const activeLink = document.querySelectorAll(".__link--active");
		activeLink.forEach((el) => {
			el.classList.remove("__link--active");
		});
		document.querySelector(".menu__logo").classList.add("__mobail", "__link--active");
		document.querySelectorAll(".menu__nav .menu__link").forEach((el) => {
			el.classList.add("__mobail");
		});

		document.addEventListener("click", function (evt) {
			if (evt.target.matches(".menu__link.__mobail") || evt.target.matches("body.__lock")) {
				toggleClass("__active");
				body.classList.toggle("__lock");
			}
		});
	} else {
		document.querySelector(".menu__logo").classList.remove("__mobail");
		document.querySelectorAll(".menu__nav .menu__link").forEach((el) => {
			el.classList.remove("__mobail");
		});
	}
});



