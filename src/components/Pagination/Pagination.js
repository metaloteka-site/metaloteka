export function Pagination() {
	const section = document.querySelector('.product-main-details');
	if (!section) return;

	const blockFilterCategories = document.querySelector('.filter-group__filters');
	const blockFilterDiameters = document.querySelector('.filter-group__diameters');

	blockFilterCategories.addEventListener('click', (e) => {
		if (e.target.classList.contains('filter-group__filter-value')) {
			if (!e.target.classList.contains('active')) {
				Array.from(blockFilterCategories.children).forEach((item) => {
					item.classList.remove('active');
					e.target.classList.add('active');
				});
			}
		}
	});

	blockFilterDiameters.addEventListener('click', (e) => {
		if (e.target.classList.contains('filter-group__diameter-value')) {
			if (!e.target.classList.contains('active')) {
				Array.from(blockFilterDiameters.children).forEach((item) => {
					item.classList.remove('active');
					e.target.classList.add('active');
				});
			}
		}
	});
}
