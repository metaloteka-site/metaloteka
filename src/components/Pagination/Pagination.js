export function Pagination() {
	const section = document.querySelector('.product-main-details');
	if (!section) return;

	const blockItems = document.querySelector('.product-list__content');
	const searchTotalCount = document.querySelector('.product-main-details__search-count');
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

	const element = section.querySelector('.pagination ul');

	let currentPage = 3;
	let totalPage = 9;
	searchTotalCount.innerHTML = `Найдено товаров (${blockItems.children.length})`;
	//TODO пагинацию поправить, не должна генерится js. Ее нужно добавить в верстку ссылками

	/*
		*  <div class="list">
						<a href="/link/" class="btn-start" ><span><i class="fas fa-angle-left"></i>в начало</span></a>
						<a href="/link/" class="first numb" ><span>1</span></a>
						<a href="/link/" class="numb active"><span>2</span></a>
						<a href="/link/" class="dots"><span>.....</span></a>
						<a href="/link/" class="numb"><span>5</span></a>
						<a href="/link/" class='btn-next'><span><i class='fas fa-angle-right'>следующая</i></span></a>
				</div>
		*
		* */

	window.createPagination = function (totalPages, page) {
		let liTag = '';
		let active;
		let beforePage = page - 1;
		let afterPage = page + 1;
		if (page > 1) {
			liTag += `<li class="btn-start" onclick="createPagination(${totalPages}, 1)"><span><i class="fas fa-angle-left"></i>в начало</span></li>`;
		}

		if (page > 2) {
			liTag += `<li class="first numb" onclick="createPagination(${totalPages}, 1)"><span>1</span></li>`;
			if (page > 3) {
				liTag += '<li class="dots"><span>.....</span></li>';
			}
		}

		if (totalPages > 4) {
			if (page === 1) {
				afterPage = afterPage + 2;
			} else if (page === 2) {
				afterPage = afterPage + 1;
			}
		}

		if (page > 3) {
			if (page === totalPages) {
				beforePage = beforePage - 2;
			} else if (page === totalPages - 1) {
				beforePage = beforePage - 1;
			}
		}

		for (var plength = beforePage; plength <= afterPage; plength++) {
			if (plength > totalPages) {
				continue;
			}
			if (plength === 0) {
				plength = plength + 1;
			}
			if (page === plength) {
				active = 'active';
			} else {
				active = '';
			}
			liTag += `<li class="numb ${active}" onclick="createPagination(${totalPages}, ${plength})"><span>${plength}</span></li>`;
		}
		if (page < totalPages - 1) {
			if (page < totalPages - 2) {
				liTag += '<li class="dots"><span>.....</span></li>';
			}
			liTag += `<li class="last numb" onclick="createPagination(${totalPages}, ${totalPages})"><span>${totalPages}</span></li>`;
		}

		if (page < totalPages) {
			liTag += `<li class='btn-next' onclick='createPagination(${totalPages}, ${
				page + 1
			})'><span><i class='fas fa-angle-right'>следующая</i></span></li>`;
		}
		if (element) {
			//element.innerHTML = liTag;
			// метод paginationClick позволяет отрисовать карточки из полученного массива данных
			// paginationClick(cardsData, currentPage);
			return liTag;
		}
	};

	// function paginationClick(cardsData, selectedPage) {
	// 	Array.from(element.children).forEach((li) => {
	// 		if (li.classList.contains('active')) {
	// 			// selectedPage - возвращает значение выбранной пагинации при первой инициализации и также при клике
	// 			selectedPage = li.firstElementChild.innerHTML;
	// 			// section.scrollIntoView({ block: 'start', behavior: 'smooth' });
	// 			// метод renderCards для отрисовки
	// 			// renderCards();
	// 			console.log(selectedPage);
	// 		}
	// 	});
	// }

	window.createPagination(totalPage, currentPage);
}
