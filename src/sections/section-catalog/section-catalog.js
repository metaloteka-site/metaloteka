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
		new SectionCatalogControl(elem);
	}
}
