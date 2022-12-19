class SectionCatalogControl {
	constructor(elem) {
		this.generalSection = elem;
		this.detailsSection = document.querySelector('[data-type-section="details"]');
		this.accordionWrapper = document.querySelectorAll('.accordion__body');
		this.selectedProduct = this.detailsSection.querySelector('.section-catalog__selected-title');
	}

	init() {
		this.changeActiveSection();
	}

	changeActiveSection() {
		this.accordionWrapper.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target.classList.contains('accordion-list__link')) {
					this.generalSection.style.display = 'none';
					this.detailsSection.style.display = 'flex';
				}
			});
		});
		this.selectedProduct.addEventListener('click', () => {
			this.generalSection.style.display = 'flex';
			this.detailsSection.style.display = 'none';
		});
	}
}

export function SectionCatalog() {
	const elem = document.querySelector('[data-type-section="general"]');

	if (elem) {
		new SectionCatalogControl(elem).init();
	}
}
