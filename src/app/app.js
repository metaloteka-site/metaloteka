import './app.scss';

// подключение js компонентов
import { Tabs, Accordion, Slider } from '../components';

// Вызов js после загрузки DOM дерева
window.addEventListener('DOMContentLoaded', () => {
	Tabs();
	Accordion();
	Slider();
});
