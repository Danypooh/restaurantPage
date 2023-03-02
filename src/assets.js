import Pizza from './imgs/pizza.jpg'
import Pasta from './imgs/pasta.jpg'
import Salad from './imgs/salad.jpg'
import Dessert from './imgs/dessert.jpg'
import Drink from './imgs/drink.jpg'

const images = (function() {
  
  const _createImgHtml = (img, type) =>
    `
    <li class="products">
      <a href=""><img src="${img}" alt="${type}-image"></a>
      <div></div>
    </li>
  `;

  const _pizza = _createImgHtml(Pizza, 'pizza');
  const _pasta = _createImgHtml(Pasta, 'pasta')
  const _salad = _createImgHtml(Salad, 'salad')
  const _dessert = _createImgHtml(Dessert, 'dessert')
  const _drink = _createImgHtml(Drink, 'drink')



  const getPizza = () => _pizza;
  const getPasta = () => _pasta;
  const getSalad = () => _salad;
  const getDessert = () => _dessert;
  const getDrink = () => _drink;

  return {
    getPizza,
    getPasta,
    getSalad,
    getDessert,
    getDrink
  }   
})();

export {images};