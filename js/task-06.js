const CorrectSymbolNumber =
  document.querySelector('#validation-input').dataset.length;
const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onCorrectSymbolCount);

function onCorrectSymbolCount(event) {
  event.currentTarget.value.length == CorrectSymbolNumber
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');

}
