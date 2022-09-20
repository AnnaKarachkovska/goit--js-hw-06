const categories = document.querySelector('#categories');

const numberOfCategories = categories.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const items = document.querySelectorAll('.item');
items.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelector('ul').children.length}`);
});