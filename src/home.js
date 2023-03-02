import {images} from './assets';

const homePage = (function() {  // Module for homePage HTML
  function createHeader() {
    const header = `
      <header>
        <h1 id="title">The Pasta Society</h1>
        <img src="" alt="restaurant-logo">
        <div id="slogan">Be part of the society: 
          <a href="" id="contact">Contact</a>
        </div>
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
        <div>Thanks to Pixabay for the images</div>
      </footer>
      `;
    return footer;
  }
  
  return {
    createHeader,
    createMainContent,
    createFooter,
  }
})()

export {homePage};