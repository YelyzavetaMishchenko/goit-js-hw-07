const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputText = () => {
  const inputValue = inputEl.value.trim();

  if (inputValue === '') {
    spanEl.textContent = 'Anonymous';
  } else {
    spanEl.textContent = inputEl.value;
  }
};

inputEl.addEventListener('input', onInputText);
