function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create');
const destroyBtn = document.querySelector('button[data-destroy');
const inputEl = document.querySelector('#controls>input');
const boxesNumberEl = document.querySelector('#boxes');
// boxesNumberEl.style.width = '30px';
// boxesNumberEl.style.height = '30px';
// boxesNumberEl.style.backgroundColor = 'red';
// function onCreateBtnClick(amount) {
//   const box = document.createElement('div');
//   amount = inputEl.value;
//   console.log(inputEl.value);
// }

createBtn.addEventListener('click', onCreateBtnClick);
function onCreateBtnClick(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.background = getRandomHexColor();
    boxesNumberEl.append(box);
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  inputEl.value = '';
  boxesNumberEl.innerHTML = '';
}



