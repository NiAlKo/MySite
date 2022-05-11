// SLIDER
let sliders = document.querySelectorAll('.__swiper');

if (sliders) {
	for (let i = 0; i < sliders.length; i++) {
		let slider = sliders[i];
		if (!slider.classList.contains('swiper-bild')) {
			let sliderItems = slider.children;
			if (sliderItems) {
				for (let i = 0; i < sliderItems.length; i++) {
					let element = sliderItems[i];
					element.classList.add('swiper-slide');
				}
			}
			slider.classList.add('swiper-bild');
		}
	}
}

if ('.item-projects__slider') {
	const swiper = new Swiper('.item-projects__slider', {
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		effect: 'fade',
		watchSlidesProgress: true,

		fadeEffect: {
			crossFade: true
		},

		pagination: {
			el: '.item-projects__pagination',
			clickable: true
		},

		autoplay: {
			delay: 3500,
			disableOnInteraction: false
		}
	});


	document.addEventListener('mouseenter', event => {
		const el = event.target;
		if (el && el.matches && el.matches('.item-projects__slider')) {
			el.swiper.autoplay.stop();
			el.classList.add('swiper-paused');

			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
			activeNavItem.style.animationPlayState = 'paused';
		}
	}, true);

	document.addEventListener('mouseleave', event => {
		const el = event.target;
		if (el && el.matches && el.matches('.item-projects__slider')) {
			el.swiper.autoplay.start();
			el.classList.remove('swiper-paused');


		}
	}, true);
}