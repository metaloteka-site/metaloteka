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
		const galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true,
			loop: true,
			loopedSlides: 3,
			thumbs: {
				swiper: galleryTop,
			},
		});
		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;
	}
}

export function ProductSlider() {
	const elem = document.querySelector('.product-swiper');

	if (elem) {
		new ProductSliderControl(elem);
	}
}
