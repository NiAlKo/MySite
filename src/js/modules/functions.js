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
	ibg.forEach(el => {
		if (el.querySelector('img')) {
			el.style.backgroundImage = "url(" + el.querySelector("img").getAttribute("src") + ")";
		}
	});
}
ibg();

import { customSelect } from "./custom_select.js";

if (document.querySelector('.header-project__custom-select')) {

	const selectTypeProjectDesktop = new customSelect('#custom-select', {
		selectedValue: 'all-project',
		placeholder: '',
		desktop: true,

		data: [
			{ value: 'all-project', textItem: 'все проекты' },
			{ value: 'ecom', textItem: 'ecom' },
			{ value: 'landing', textItem: 'landing' },
			{ value: 'app', textItem: 'app' },
		],
		onSelect(item) {
			console.log('selected item:', item)
		}
	});

	const selectTechnologies = new customSelect('#custom-select1', {
		selectedValue: '',
		placeholder: 'технология',

		data: [
			{ value: 'javascript', textItem: 'javascript' },
			{ value: 'vue', textItem: 'vue.js' },
			{ value: 'html_css', textItem: 'html/css' },
			{ value: 'next_js', textItem: 'next.js' },
			{ value: 'php', textItem: 'php' },
		],

		onSelect(item) {
			console.log('selected item', item)
		}
	});

	const selectTypeProject = new customSelect('#custom-select2', {
		selectedValue: 'all-project',
		placeholder: '',

		data: [
			{ value: 'all-project', textItem: 'все проекты' },
			{ value: 'ecom', textItem: 'ecom' },
			{ value: 'landing', textItem: 'landing' },
			{ value: 'app', textItem: 'app' },
		],
		onSelect(item) {
			console.log('selected item', item)
		}
	});

	function BtnReset(btnName, ...all) {
		const ButtonReset = document.querySelector(btnName);

		for (let select of all) {
			ButtonReset.addEventListener('click', () => {
				select.reset();
				ButtonReset.style.display = 'none';
			});
		}
	}

	BtnReset('#custom-select-btn', selectTypeProjectDesktop, selectTechnologies, selectTypeProject);

}
