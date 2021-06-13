import menuCard from '../templates/menu-cards.hbs';
import menuItems from './menu.json';

const menu = document.querySelector('.js-menu')
const addMenuList = createMenuList(menuItems);

function createMenuList(arr) {
    return arr.map(menuCard).join('')
}

menu.insertAdjacentHTML('beforeend', addMenuList)