function setTheme(nameTheme) {
	const arrayTheme = ["theme-default", "theme-light", "theme-contrast"];
	const selectedThemeBtns = document.querySelectorAll(".theme-" + nameTheme + "-link");
	const themBtns = document.querySelectorAll(".menu__theme .menu__link");
	const bodyDocument = document.querySelector("body");

	arrayTheme.forEach((el) => {
		bodyDocument.classList.remove(el);
	})

	bodyDocument.classList.add("theme-" + nameTheme);

	themBtns.forEach((el) => {
		el.classList.remove("menu__link--active");
	});

	selectedThemeBtns.forEach((el) => {
		el.classList.add("menu__link--active");
	});
}
function choosTheme() {
	const arrayThemeLink = [".theme-default-link", ".theme-light-link", ".theme-contrast-link"];
	const arrayAllThemeLink = [];

	arrayThemeLink.forEach((el) => {
		document.querySelectorAll(el).forEach((element) => {
			arrayAllThemeLink.push(element);
		});
	});

	arrayAllThemeLink.forEach((link) => {
		link.addEventListener("click", (evt) => {
			if (evt.target.matches(".theme-default-link")) {
				setTheme("default");
			} else if (evt.target.matches(".theme-light-link")) {
				setTheme("light");
			} else {
				setTheme("contrast");
			}
		});
	});
}

window.addEventListener("DOMContentLoaded", function () {
	setTheme("default");
	choosTheme();
});