import './style.css';
import homePage from './home';

const content = document.getElementById('content');

content.insertAdjacentHTML("afterbegin", homePage.getHeader());
content.insertAdjacentHTML("beforeend", homePage.getFooter());
content.insertAdjacentHTML("beforeend", homePage.getMainContent());