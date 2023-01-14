class CalculationOrderControl {
	constructor(elem) {
		this.component = elem;
		this.parent = '.calculation-order__';
		this.startBtn = this.component.querySelector('.btn-start');
		this.endBtn = this.component.querySelector('.btn-end');
		this.formBtn = this.component.querySelector(`${this.parent}btn-form`);
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
		const form = this.formWrapper.querySelector('form');

		this.formBtn.addEventListener('click', (e) => {
			e.preventDefault();

			const name = form.name.value;
			const email = form.email.value;
			const phone = form.phone.value;
			const comment = form.comment.value;

			saveForm({ name, email, phone, comment });
		});

		function saveForm(date) {
			const dataForm = {
				date: new Date().toLocaleDateString(),
				...date,
			};

			postForm(dataForm);
		}

		async function postForm(dataForm) {
			const url = 'https://jsonplaceholder.typicode.com/posts';
			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Access: 'application/json',
				},
				body: JSON.stringify(dataForm),
			});
		}
	}
}

export function CalculationOrder() {
	const elem = document.querySelector('.calculation-order');

	if (elem) {
		new CalculationOrderControl(elem);
	}
}
