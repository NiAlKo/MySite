// Burger menu
const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");

burger.addEventListener('click', function(){
	burger.classList.toggle('__active');
	menu.classList.toggle('__active');
	body.classList.toggle('__lock');
})


window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

if (window.innerWidth > 991.98) {
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
}
});

let ua = window.navigator.userAgent;
let msie = ua.indexOf("MSIE ");

// Обнаружение мобильного
let isMobile = {
	Android: function() {
			return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
			return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function() {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() || 
				isMobile.iOS() ||
				isMobile.Opera() || 
				isMobile.Windows());
	}
};

function isIE() {
	ua = navigator.userAgent;
	let is_ie = msie > -1 || msie > -1;
	return is_ie;
}

 if (isIE()){
	 document.querySelector("html").classList.add("ie");
 }
 
 if(isMobile.any()) {
	 document.querySelector("html").classList.add("__touch");
	 menuBody.classList.add("__mobail");
	 document.querySelector('.__link--active').classList.add("__mobail");
 }


 window.onload = function () {

// Toggler themes
		const themMenu = document.querySelectorAll(".menu__theme .menu__link");
		let theme = "theme-default";
		themMenu.forEach((element) => {
				element.addEventListener("click", themMenuActions);
			});

		function themMenuActions(evt) {
			evt.preventDefault();
			const targetEl = evt.target;
			const themeDefault = targetEl.textContent == "Dark";
			const themeLight = targetEl.textContent == "Light";
			const themeContrast = targetEl.textContent == "Contrast";
			const activeLink = targetEl.classList.contains("menu__link--active");
			memoryTheme();
				 if (!activeLink && themeDefault) {
					_removeClasses(themMenu, "menu__link--active");
					addClasses(targetEl,"theme-default");
					theme = "theme-default";
				}
				 if (!activeLink && themeLight) {
					_removeClasses(themMenu, "menu__link--active");
					addClasses(targetEl,"theme-light");
					theme = "theme-light";
				}
				 if (!activeLink && themeContrast) {
					_removeClasses(themMenu, "menu__link--active");
					addClasses(targetEl,"theme-contrast");
					theme = "theme-contrast";
				}
				
				function addClasses(element,theme){
						element.classList.add("menu__link--active");
						if(body.classList.contains("__lock")){
							body.className = '__lock';
							body.classList.add(theme);
						} else {
							body.className = '';
							body.classList.add(theme);
						}
					}
		}

	function _removeClasses(collection, className) {
		for (let elements of collection) {
			elements.classList.remove(className);
		}
	}
		// Memory theme 
	function memoryTheme (){
		const currentTheme = localStorage.getItem("theme");
		if (currentTheme == "theme-default") {
			theme = "theme-default";
		} else if(currentTheme == "theme-light"){
			theme = "theme-light";
		} else{
			theme = "theme-contrast";
		}
		localStorage.setItem("theme", theme);
	}
} 