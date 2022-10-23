class TabsControl {
	constructor(elem) {
		this.parent = '.tabs__';
		this.component = elem;
		this.tabsButtons = this.component.querySelector(`${this.parent}buttons`);
		this.tabButtons = this.component.querySelectorAll('[data-tab-button]');
		this.tabContents = this.component.querySelectorAll('[data-tab-content]');
	}

	// Определяем активный tabs__button
	activeTabButton(dataTabButton) {
		this.tabButtons.forEach((item) => {
			item.classList.remove('js-active');
		});
		return this.component.querySelector(`[data-tab-button='${dataTabButton}']`).classList.add('js-active');
	}

	// Определяем активный tabs__content
	activeTabContent(dataTabContent) {
		this.tabContents.forEach((item) => {
			item.classList.remove('js-active');
		});
		return this.component.querySelector(`[data-tab-content='${dataTabContent}']`).classList.add('js-active');
	}

	// Инициализация класса Tabs
	init() {
		this.tabsButtons.addEventListener('click', (e) => {
			const dataTabButton = e.target.dataset.tabButton;

			if (dataTabButton) {
				this.activeTabButton(dataTabButton);
				this.activeTabContent(dataTabButton);
			}
		});
	}
}

export function Tabs() {
	const elem = document.querySelector('.tabs');

	if (elem) {
		new TabsControl(elem).init();
	}
}
