import './app.scss';

// подключение js компонентов
import { Tabs, Accordion } from '../components';

// Вызов js после загрузки DOM дерева
window.addEventListener('DOMContentLoaded', () => {
	Tabs();
	Accordion();
});
