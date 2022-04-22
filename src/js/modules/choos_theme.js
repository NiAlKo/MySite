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
	const arrayThemeLink = ["default", "light", "contrast"];
	arrayThemeLink.forEach(themeName => {
		document.querySelectorAll(".theme-" + themeName + "-link").forEach(element => {
			element.addEventListener("click", () => { setTheme(themeName); });
		});
	});
}

window.addEventListener("DOMContentLoaded", function () {
	setTheme("default");
	choosTheme();
});