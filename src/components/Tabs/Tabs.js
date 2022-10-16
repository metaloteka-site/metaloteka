class TabsControl {
	constructor(elem) {
		this.tt = elem;
	}

	tabs() {
		const tabs = document.querySelectorAll('.js-tab');
		const tabContents = document.querySelectorAll('.js-tab-content');

		tabs.forEach((tab, index) => {
			tab.addEventListener('click', (event) => {
				tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
				tabs.forEach((tab) => tab.classList.remove('active'));

				event.currentTarget.classList.add('active');
				tabContents[index].classList.add('active');
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
