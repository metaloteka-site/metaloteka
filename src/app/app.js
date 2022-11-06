import './app.scss';

// подключение js компонентов
import { Tabs } from '../components';

// Вызов js после загрузки DOM дерева
window.addEventListener('DOMContentLoaded', () => {
	Tabs();
});
