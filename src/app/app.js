import './app.scss';

// подключение js компонентов
import { Tabs, Slider, Popup, Accordion, Pagination, Select } from '../components';

// подключение js секций
import { SectionCatalog } from '../sections/section-catalog/section-catalog';

// Вызов js после загрузки DOM дерева
window.addEventListener('DOMContentLoaded', () => {
	Tabs();
	SectionCatalog();
	Accordion();
	Slider();
	Popup();
	Pagination();
	Select();
});
