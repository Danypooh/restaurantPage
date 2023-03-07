import home from "./home";
import contact from "./contact";

const initializeWebsite = (function() {

  function init() {
    if (document.readyState !== 'loading') {home();}

    const contactId = document.getElementById('contact');
    contactId.addEventListener("click", () => contact());
  }

  return init;
})();

export default initializeWebsite;