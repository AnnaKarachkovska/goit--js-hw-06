function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color')

btn.addEventListener('click', colorChange);

function colorChange() {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};