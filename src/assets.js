import Pizza from './imgs/pizza.jpg'
import Pasta from './imgs/pasta.jpg'
import Salad from './imgs/salad.jpg'
import Dessert from './imgs/dessert.jpg'
import Drink from './imgs/drink.jpg'
import Logo from './imgs/logo.jpeg'

const images = (function() {
  // Private
  const createImgHtml = (img, type) =>
    `
    <li class="products">
      <a href=""><img src="${img}" alt="${type}-image"></a>
      <div></div>
    </li>
  `;

  const pizza = createImgHtml(Pizza, 'pizza');
  const pasta = createImgHtml(Pasta, 'pasta')
  const salad = createImgHtml(Salad, 'salad')
  const dessert = createImgHtml(Dessert, 'dessert')
  const drink = createImgHtml(Drink, 'drink')

  const logo = `<img id="logo" src="${Logo}" alt="the-pasta-society-logo">`

  // Public
  const getPizza = () => pizza;
  const getPasta = () => pasta;
  const getSalad = () => salad;
  const getDessert = () => dessert;
  const getDrink = () => drink;
  const getLogo = () => logo;

  return {
    getPizza,
    getPasta,
    getSalad,
    getDessert,
    getDrink,
    getLogo,
  }   
})();

export default images;