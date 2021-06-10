import menuItems from './menu.json';
import menuCard from './partials/menu-item.hbs';

const menu = document.querySelector('.js-menu');
const addMenuList = createMenuList(menuItems);

function createMenuList(arr) {
    return arr.map(menuCard).join('');
}

menu.insertAdjacentElement('beforeend', addMenuList);
