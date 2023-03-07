import images from './assets';

const home = (function() {  // Module for home HTML
  // Private
  function createHeader() {
    const header = `
      <header>
        <h1 id="title">The Pasta Society</h1>
        ${images.getLogo()}
      </header>
      `;
    return header;
    }
  
  function createMainContent() {
    const mainContent = `
      <main>
        <div id="main-content">
          <ul id="product-list">
            ${images.getPizza()}
            ${images.getPasta()}
            ${images.getSalad()}
            ${images.getDessert()}
            ${images.getDrink()}
          </ul>
        </div>
      </main>
      `;
    return mainContent;
  }
  
  function createFooter() {
    const footer = `
      <footer>
        <div id="slogan">Be part of the society: 
          <a href="" id="contact">Contact</a>
        </div>
      </footer>
      `;
    return footer;
  }

  // Public 
  function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML= '';
    content.insertAdjacentHTML("afterbegin", createHeader());
    content.insertAdjacentHTML("beforeend", createFooter());
    content.insertAdjacentHTML("beforeend", createMainContent());
  }
  
  return loadHome;
})()

export default home;