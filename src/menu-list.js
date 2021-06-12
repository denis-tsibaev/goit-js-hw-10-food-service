import menuCard from '../src/templates/menu-item.hbs';
import menuItems from './menu.json';

const menu = document.querySelector('ul.js-menu');
const addMenuList = createMenuList(menuItems);

function createMenuList(array) {
    return array.map(menuCard).join('');
}

menu.insertAdjacentElement('beforeend', addMenuList);
