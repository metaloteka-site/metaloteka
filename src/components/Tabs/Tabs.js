class TabsControl {
	constructor(elem) {
		this.parent = '.tabs__';
		this.component = elem;
		this.tabsWrapButtons = this.component.querySelector(`${this.parent}buttons`);
		this.tabsButtons = this.component.querySelectorAll('[data-tab-button]');
		this.tabContents = this.component.querySelectorAll('[data-tab-content]');
	}

	// Определяем активный tabs__button
	activeTabButton(dataTabButton) {
		this.tabsButtons.forEach((item) => {
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
			if(!this.tabsWrapButtons){
					return false;
			}
		this.tabsWrapButtons.addEventListener('click', (e) => {
			const dataTabButton = e.target.dataset.tabButton;

			if (dataTabButton) {
				this.activeTabButton(dataTabButton);
				this.activeTabContent(dataTabButton);
			}

			// Горизонтальный подскролл к табу
			e.target.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
		});
	}
}

export function Tabs() {
	const elems = document.querySelectorAll('.tabs');

	if (elems.length) {
		elems.forEach((elem) => {
			new TabsControl(elem).init();
		});
	}
}
