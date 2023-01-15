import Swiper, { Navigation, Pagination } from 'swiper';

class SliderControl {
	constructor(elem) {
		this.component = elem;
		this.isModContact = this.component.classList.contains('slider_contact');
	}

	// Инициализация класса Slider
	init() {
		new Swiper(this.component, {
			loop: this.isModContact,

			pagination: {
				el: '.slider__pagination',
			},

			navigation: {
				nextEl: '.slider__button-next',
			},
			modules: [Navigation, Pagination],
		});
	}
}

export function Slider() {
	const elem = document.querySelector('.slider');

	if (elem) {
		new SliderControl(elem).init();
	}
}
