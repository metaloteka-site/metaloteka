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
			case 'categories':
				name = 'Категории товара';
				break;
			case 'product-details':
				name = 'Информация о продукте';
				break;
			case 'cart-page':
				name = 'Страница корзины';
				break;
			case 'order-processing':
				name = 'Оформление заказа';
				break;
			case 'order-reserve':
				name = 'Оформление резерва';
				break;
			case 'privacy-policy':
				name = 'Политика конфиденциальности';
				break;
			case 'popups':
				name = 'Попапы';
				break;
			default:
				name = 'name page';
				break;
		}
		return name;
	},
};
