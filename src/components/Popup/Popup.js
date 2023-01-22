class PopupControl {
	constructor(block) {
		this.block = block;
		this.classBlock = '.popup';

		this.body = document.querySelector('body');
		this.dataOpen = document.querySelectorAll('[data-popup-open]');
		this.buttonClose = this.block.querySelector(`${this.classBlock}__close`);

		// Инициализация методов класса PopupControl
		this.init();
	}

	open() {
		this.dataOpen.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();

				let namePopup = item.dataset.popupOpen;
				let popup = document.querySelector(`[data-popup='${namePopup}']`);

				if (popup) {
					popup.classList.add('js-popup-open');
					this.body.classList.add('no-scroll');
				}
			});
		});
	}

	close() {
			if(!this.buttonClose){
					return false
			}
		this.buttonClose.addEventListener('click', () => {
			this.block.classList.remove('js-popup-open');
			this.body.classList.remove('no-scroll');
		});
	}

	init() {
		this.open();
		this.close();
	}
}

export function Popup() {
	const elems = document.querySelectorAll('.popup');

	elems.forEach((item) => {
		if (item) {
			new PopupControl(item);
		}
	});
}
