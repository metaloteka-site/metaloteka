import '../../layout/assets/images/icon-pin-map.svg';
import '../../layout/assets/images/icon-qr.svg';
import '../../layout/assets/images/map.jpg';
const tabs = document.querySelectorAll('.js-tab');
const tabContents = document.querySelectorAll('.js-tab-content');
const btn = document.querySelector('.js-collapse');

tabs.forEach((tab, index) => {
	tab.addEventListener('click', (event) => {
		tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
		tabs.forEach((tab) => tab.classList.remove('active'));

		event.currentTarget.classList.add('active');
		tabContents[index].classList.add('active');
	});
});

btn.addEventListener('click', () => {
	const activeTabContent = document.querySelector('.js-tab-content.active');
	activeTabContent.classList.toggle('opened');
	if (activeTabContent.classList.contains('opened')) {
		btn.innerHTML = 'Скрыть';
	} else {
		btn.innerHTML = 'Развернуть';
	}
});
