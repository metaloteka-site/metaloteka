class SectionCatalogControl {
	constructor(elem) {
		this.generalSection = elem;
		this.detailsSection = document.querySelector('[data-type-section="details"]');
		this.accordionWrapper = document.querySelectorAll('.accordion__body');
		this.selectedProduct = this.detailsSection.querySelectorAll('.section-catalog__selected-title');
		this.button = document.querySelector('.header__catalog');

		this.init();
	}

	init() {
		this.isCatalogPage();
		this.modalSection();
	}

	changeActiveSection() {
		this.accordionWrapper.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target.classList.contains('accordion-list__link')) {
					this.generalSection.style.height = 0;
					this.detailsSection.style.height = 'max-content';
				}
			});
		});
		this.selectedProduct.forEach((item) => {
			item.addEventListener('click', () => {
				this.generalSection.style.height = 'max-content';
				this.detailsSection.style.height = 0;
			});
		});
	}

	isCatalogPage() {
		const mediaQuery = window.matchMedia('(max-width: 578px)');
		let media = false;
		function handleTabletChange(e) {
			media = e.matches;
		}

		mediaQuery.addListener(handleTabletChange);
		handleTabletChange(mediaQuery);

		const copySectionGeneral = this.generalSection.cloneNode(true);
		const copySectionDetails = this.detailsSection.cloneNode(true);

		if (document.querySelector('.main').classList.contains('catalog')) {
			document.querySelector('.main').append(copySectionGeneral);
			document.querySelector('.main').append(copySectionDetails);
		} else if (document.querySelector('.main').classList.contains('index') && media) {
			document.querySelector('.main').prepend(copySectionGeneral);
			document.querySelector('.main').prepend(copySectionDetails);
		}

		if (
			document.querySelector('.main').classList.contains('catalog') ||
			(document.querySelector('.main').classList.contains('index') && media)
		) {
			this.button.classList.add('notEvents');
			copySectionGeneral.classList.add('static');
			this.generalSection.remove();
			this.detailsSection.remove();
			const accordionLinks = document.querySelectorAll('.accordion-list__link');
			const selectedProduct = document.querySelectorAll('.section-catalog__selected-title');
			accordionLinks.forEach((item) => {
				item.addEventListener('click', () => {
					copySectionGeneral.style.height = 0;
					copySectionDetails.style.height = 'max-content';
					copySectionDetails.classList.add('static');
				});
			});
			selectedProduct.forEach((item) => {
				item.addEventListener('click', () => {
					copySectionGeneral.style.height = 'max-content';
					copySectionDetails.style.height = 0;
				});
			});
		}
	}

	modalSection() {
		this.button.addEventListener('click', () => {
			if (this.generalSection.style.height !== 'max-content' && this.detailsSection.style.height !== 'max-content') {
				this.generalSection.style.height = 'max-content';
				this.changeActiveSection();
			} else {
				this.generalSection.style.height = 0;
				this.detailsSection.style.height = 0;
			}
		});
	}
}

export function SectionCatalog() {
	const elem = document.querySelector('[data-type-section="general"]');

	if (elem) {
		new SectionCatalogControl(elem);
	}
}
