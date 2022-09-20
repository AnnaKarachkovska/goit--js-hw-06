const value = document.querySelector('#value');
let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

const decrement = () => {
    counterValue -= 1; 
    value.innerHTML = counterValue;
};
minusBtn.addEventListener('click', decrement);

const increment = () => {
    counterValue += 1; 
    value.innerHTML = counterValue;
};
plusBtn.addEventListener('click', increment);

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//  та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
//  або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.