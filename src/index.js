import './style.css';
import {homePage} from './home';

const content = document.getElementById('content');

content.insertAdjacentHTML("afterbegin", homePage.createHeader());
content.insertAdjacentHTML("beforeend", homePage.createFooter());
content.insertAdjacentHTML("beforeend", homePage.createMainContent());