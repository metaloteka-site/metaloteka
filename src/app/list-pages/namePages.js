const path = require('path');

module.exports = {
	names: (page) => {
		let name;
		switch (path.basename(page, '.pug')) {
			case 'index':
				name = 'Главная';
				break;
			case 'ui-kit':
				name = 'UI KIT';
				break;
			case 'contacts':
				name = 'Контакты';
				break;
			case 'personal-area':
				name = 'Личный кабинет';
				break;
			case 'catalog':
				name = 'Каталог';
				break;
			case 'product-details':
				name = 'Информация о продукте';
				break;
			case 'cart-page':
				name = 'Страница корзины';
				break;
			default:
				name = 'name page';
				break;
		}
		return name;
	},
};
