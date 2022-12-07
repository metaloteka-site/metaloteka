import './app.scss';

// подключение js компонентов
import { Tabs, Slider, Popup } from '../components';

// Вызов js после загрузки DOM дерева
window.addEventListener('DOMContentLoaded', () => {
	Tabs();
	Slider();
	Popup();
});
