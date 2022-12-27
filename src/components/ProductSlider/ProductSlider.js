import { Swiper, EffectFade, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([EffectFade, Navigation, Pagination, Thumbs]);

class ProductSliderControl {
	constructor(elem) {
		this.component = elem;

		this.init();
	}

	// Инициализация класса Slider
	init() {
		const galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			loop: true,
			loopedSlides: 3,
		});
		new Swiper('.gallery-thumbs', {
			spaceBetween: 18,
			slidesPerView: 3,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			loop: true,
			loopedSlides: 3,
			thumbs: {
				swiper: galleryTop,
			},
		});
	}
}

export function ProductSlider() {
	const elem = document.querySelector('.product-swiper');

	if (elem) {
		new ProductSliderControl(elem);
	}
}
