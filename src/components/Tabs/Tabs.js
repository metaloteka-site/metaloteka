class TabsControl {
	constructor(elem) {
		this.component = elem;
		this.tabBtns = this.component.querySelectorAll('.js-tab');
		this.tabContents = document.querySelectorAll('.tabs__content');
	}

	tabs() {
		this.tabBtns.forEach((tab, index) => {
			tab.addEventListener('click', (event) => {
				this.tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
				this.tabBtns.forEach((tab) => tab.classList.remove('active'));

				event.currentTarget.classList.add('active');
				this.tabContents[index].classList.add('active');
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
