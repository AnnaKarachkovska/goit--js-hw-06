const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  itemsList.push(item);
});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...itemsList);