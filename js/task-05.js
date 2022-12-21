// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

const nameEl = document.querySelector('#name-output');

function onInputChange(event) {
  event.currentTarget.value === ''
    ? (nameEl.textContent = 'Anonymous')
    : (nameEl.textContent = event.currentTarget.value);
}
