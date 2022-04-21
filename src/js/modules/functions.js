/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	// Добавление класса _webp или _no-webp для HTML 
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

// Adaptive img
export function ibg() {
	const ibg = document.querySelectorAll(".__ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
		}
	}
}
ibg();

// choosTheme
export function choosTheme() {
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