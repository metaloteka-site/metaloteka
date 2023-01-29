class CalculationOrderControl {
	constructor(elem) {
		this.component = elem;
		this.parent = '.calculation-order__';
		this.startBtn = this.component.querySelector('.btn-start');
		this.descriptionWrapper = this.component.querySelector(`${this.parent}description-wrapper`);
		this.formWrapper = this.component.querySelector(`${this.parent}form-wrapper`);

		this.init();
	}

	// Инициализация класса Tabs
	init() {
		this.startBtn.addEventListener('click', () => {
			this.descriptionWrapper.style.display = 'none';
			this.formWrapperAction();
		});
	}

	formWrapperAction() {
		this.formWrapper.style.display = 'block';
	}
}

export function CalculationOrder() {
	const elem = document.querySelector('.calculation-order');

	if (elem) {
		new CalculationOrderControl(elem);
	}
}
