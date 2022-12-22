const CorrectSymbolNumber =
  document.querySelector('#validation-input').dataset.length;
const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onCorrectSymbolCount);

function onCorrectSymbolCount(event) {
  if (event.currentTarget.value.length.toString() === CorrectSymbolNumber) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  }
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');

  // event.currentTarget.value.length.toString() === CorrectSymbolNumber
  //   ? inputEl.classList.add('valid') && inputEl.classList.remove('invalid')
  //   : inputEl.classList.add('invalid') && inputEl.classList.remove('valid');
}
