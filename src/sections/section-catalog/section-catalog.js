class SectionCatalogControl {
	constructor(elem) {
		this.generalSection = elem;
		this.detailsSection = document.querySelector('[data-type-section="details"]');
		this.accordionWrapper = document.querySelectorAll('.accordion__body');
		this.selectedProduct = this.detailsSection.querySelectorAll('.section-catalog__selected-title');
		this.button = document.querySelector('.header__catalog');
	}

	init() {
		this.isCatalogPage();
		this.changeActiveSection();
		this.modalSection();
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
		this.selectedProduct.forEach((item) => {
			item.addEventListener('click', () => {
				this.generalSection.style.display = 'flex';
				this.detailsSection.style.display = 'none';
			});
		});
	}

	isCatalogPage() {
		if (window.location.pathname.slice(1) === 'catalog.html') {
			this.button.classList.add('notEvents');
			const beforeSection = document.querySelector('.section-breadcrumbs').parentNode;
			const copySectionGeneral = this.generalSection.cloneNode(true);
			copySectionGeneral.classList.add('static');
			const copySectionDetails = this.detailsSection.cloneNode(true);
			beforeSection.insertAdjacentElement('afterend', copySectionGeneral);
			copySectionGeneral.insertAdjacentElement('afterend', copySectionDetails);
			this.generalSection.remove();
			this.detailsSection.remove();
		}
	}

	modalSection() {
		this.button.addEventListener('click', () => {
			if (this.generalSection.style.height !== 'max-content') {
				this.generalSection.style.height = 'max-content';
				this.changeActiveSection();
			} else {
				this.generalSection.style.height = 0;
			}
		});
	}
}

export function SectionCatalog() {
	const elem = document.querySelector('[data-type-section="general"]');

	if (elem) {
		new SectionCatalogControl(elem).init();
	}
}
