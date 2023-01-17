export class AccordionControl {
		block;
		constructor(block) {
				this.block = block;
				this.blockClass = '.accordion';

				this.title = this.block.querySelector(`${this.blockClass}__title`);
				this.body = this.block.querySelector(`${this.blockClass}__body`);

				this.bodyHeight = ` ${this.body.offsetHeight}px`;

				this.init();
		}

		init() {
				this.body.style.height = 0;

				this.title.addEventListener('click', () => {
						// e.stopPropagation();
						this.block.classList.toggle('js-active');

						if (this.body.offsetHeight === 0) {
								this.body.style.height = this.bodyHeight;
						} else {
								this.body.style.height = 0;
						}
				});
		}
}
