class TabsControl {
	constructor(elem) {
		this.parent = '.tabs__';
		this.component = elem;
		this.tabButtons = this.component.querySelectorAll(`${this.parent}button`);
		this.tabContents = document.querySelectorAll(`${this.parent}content`);
	}

	tabs() {
		this.tabButtons.forEach((tab, index) => {
			tab.addEventListener('click', (event) => {
				this.tabContents.forEach((tabContent) => tabContent.classList.remove('js-active'));
				this.tabButtons.forEach((tab) => tab.classList.remove('js-active'));

				event.currentTarget.classList.add('js-active');
				this.tabContents[index].classList.add('js-active');
			});
		});
	}

	init() {
		this.tabs();
	}
}

export function Tabs() {
	const elem = document.querySelector('.tabs');

	if (elem) {
		new TabsControl(elem).init();
	}
}
