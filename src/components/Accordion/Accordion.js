class AccordionControl {
	constructor(block) {
		this.block = block;
		this.blockClass = '.accordion';

		this.title = this.block.querySelector(`${this.blockClass}__title`);
		this.body = this.block.querySelector(`${this.blockClass}__body`);

		this.bodyHeight = ` ${this.body.offsetHeight}px`;
		document.documentElement.style.setProperty('--accordion-body-height', '0');

		this.init();
	}

	init() {
		this.title.addEventListener('click', () => {
			this.block.classList.toggle('js-active');

			if (this.body.offsetHeight === 0) {
				document.documentElement.style.setProperty('--accordion-body-height', this.bodyHeight);
			} else {
				document.documentElement.style.setProperty('--accordion-body-height', '0');
			}
		});
	}
}

export function Accordion() {
	const elem = document.querySelectorAll('.accordion');

	if (elem) {
		elem.forEach((item) => {
			new AccordionControl(item);
		});
	}
}
