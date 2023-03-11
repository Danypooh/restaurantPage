import home from "./home";
import contact from "./contact";
import menu from "./menus";

const initializeWebsite = (function() {

  function init() {
    if (document.readyState !== 'loading') {home();}

    const contactId = document.getElementById('contact');
    contactId.addEventListener("click", () => contact());

    
    const fifthProduct = document.querySelector("#product-list :nth-child(5)");
    fifthProduct.addEventListener("click", () => menu.loadFifthMenu());
  }

  return init;
})();

export default initializeWebsite;