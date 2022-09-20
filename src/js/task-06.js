const input = document.querySelector('#validation-input[data-length="6"]');

input.addEventListener('blur', () => {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
});