// Burger menu
const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");
const lockBody = document.querySelector("body.__lock");
burger.addEventListener('click', function(){
	burger.classList.toggle('__active');
	menu.classList.toggle('__active');
	body.classList.toggle('__lock');
	menuBody.classList.toggle('__active');
	
});

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
 
 if(isMobile.any()) {
	 document.querySelector("html").classList.add("__touch");
	 menuBody.classList.add("__mobail");
	 document.querySelector('.__link--active').classList.add("__mobail");
	 document.querySelectorAll('.menu__nav .menu__link').forEach((el) =>{
el.classList.add("__mobail");
	 })

	 document.addEventListener("click", function(evt){
		if (evt.target.closest(".menu__link.__mobail") || evt.target.matches("body.__lock") ){
			burger.classList.remove('__active');
			menu.classList.remove('__active');
			body.classList.remove('__lock');
			menuBody.classList.remove('__active');
		}});
 }

	function setTheme(nameTheme) {
		body.classList.remove("theme-default");
		body.classList.remove("theme-light");
		body.classList.remove("theme-contrast");

		body.classList.add("theme-" + nameTheme);
		const themBtns = document.querySelectorAll(".menu__theme .menu__link");
		themBtns.forEach((el) => {
			el.classList.remove("menu__link--active");
		});
		
		const selectedThemeBtns =	document.querySelectorAll(".theme-" + nameTheme + "-link");
		selectedThemeBtns.forEach((el) => {
			el.classList.add("menu__link--active");
		});
	}
	
 window.addEventListener("DOMContentLoaded", function () {
	 setTheme("default");
		document.querySelectorAll(".theme-default-link").forEach((el) => {
			el.addEventListener("click", () =>{ 
				setTheme("default");
			});
		});
		document.querySelectorAll(".theme-light-link").forEach((el) => {
			el.addEventListener("click", () =>{ 
				setTheme("light");
			});
		})
		document.querySelectorAll(".theme-contrast-link").forEach((el) => {
			el.addEventListener("click", () =>{ 
				setTheme("contrast");
			});
		})
}); 
