const contact = (function() {
  // Private
  function createContactContent() {
    const content = `
      <div id="contact-content">
        <div>+52 222 805 2552</div>
        <div>Instagram: <a href="https://www.instagram.com/thepastasociety_/" target="_blank" rel="noopener noreferrer">@thepastasociety_</a></div>
        <div>Facebook: <a href="https://www.facebook.com/thepastasociety/" target="_blank" rel="noopener noreferrer">The Pasta Society</a></div>
        <div><a href="https://www.google.com/maps/place/Pasta+Society/@19.0207495,-98.1295926,15z/data=!4m6!3m5!1s0x85cfebeb91e27403:0xfa9cebc3bb71d161!8m2!3d19.0207495!4d-98.1295926!16s%2Fg%2F11swpj2j7m" target="_blank" rel="noopener noreferrer">Location</a></div>
      </div>
    `;
    return content;
  }
  
  // Public
  const getContact = () => createContactContent();

  return {
    getContact,
  }
})();

export default contact;