const btn = document.querySelector('.js-collapse');

btn.addEventListener('click', () => {
	const activeTabContent = document.querySelector('.js-tab-content.active');
	activeTabContent.classList.toggle('opened');
	if (activeTabContent.classList.contains('opened')) {
		btn.innerHTML = 'Скрыть';
	} else {
		btn.innerHTML = 'Развернуть';
	}
});
