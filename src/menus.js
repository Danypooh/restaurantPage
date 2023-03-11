import home from "./home";

import DrinksMenu from './imgs/bebidas-memelas-menu.jpg'


const menu = (function() {
  // Private
  const createImgHtml = (img, type) =>
    `
    <div id="menu-content">
      <a href="#"><img src="${img}" alt="${type}-menu"></a>
      <div></div>
    </div>
    `;
  
  const createFooter = () =>
    `
    <footer>
      <div id="slogan">Be part of the society: 
        <a href="" id="home">Home</a>
      </div>
    </footer>
    `;
  
  const drinksMenu = createImgHtml(DrinksMenu, 'drinks');
  
  // Public
  function loadFifthMenu() {
    const content = document.getElementById('content');
    content.innerHTML= '';
    content.insertAdjacentHTML("afterbegin", drinksMenu);
    content.insertAdjacentHTML("beforeend", createFooter());
    const homeId = document.getElementById('home');
    homeId.addEventListener("click", () => home());
  }

  return {
    loadFifthMenu
  }
})();

export default menu;