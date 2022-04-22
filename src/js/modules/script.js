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
	let scrollDistance = window.scrollY;

	// if (window.innerWidth > 991.98) {
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
	// }
});

window.addEventListener("resize", function () {
	const activeLink = document.querySelectorAll(".__link--active");
	const menuLogo = document.querySelector(".menu__logo");
	const navigationLink = document.querySelectorAll(".menu__nav .menu__link");

	if (window.innerWidth < 991.98) {
		menuBody.classList.add("__mobail");

		activeLink.forEach((el) => {
			el.classList.remove("__link--active");
		});

		menuLogo.classList.add("__mobail", "__link--active");
		toggleClass(navigationLink, "__mobail");
	} else {
		menuLogo.classList.remove("__mobail");
		menuBody.classList.remove("__mobail");
		toggleClass(navigationLink, "__mobail", "kill");
	}
});