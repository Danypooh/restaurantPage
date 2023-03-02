import images from './assets';

const homePage = (function() {  // Module for homePage HTML
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
  const getHeader = () => createHeader();
  const getMainContent = () => createMainContent();
  const getFooter = () => createFooter();
  
  return {
    getHeader,
    getMainContent,
    getFooter,
  }
})()

export default homePage;