class SelectControl {
	constructor(el) {
		this.block = el;
		this.button = this.block.querySelector('.select__button');
		this.optionBlock = this.block.querySelector('.select__option-wrapper');
	}

	init() {
		this.openSelectList();
	}

	openSelectList() {
		this.button.addEventListener('click', () => {
			this.button.classList.toggle('active');
			this.optionBlock.classList.toggle('is-open');
		});
		this.changeSelectTitle();
	}

	changeSelectTitle() {
		this.optionBlock.addEventListener('click', (e) => {
			if (e.target.classList.contains('select__option')) {
				this.button.innerText = e.target.innerText;
				this.button.classList.remove('active');
				this.optionBlock.classList.remove('is-open');
			}
		});
	}
}

export function Select() {
	const elems = document.querySelectorAll('.select');

	elems.forEach((item) => {
		if (item) {
			new SelectControl(item).init();
		}
	});
}
