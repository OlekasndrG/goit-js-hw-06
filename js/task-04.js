{
  /* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
}

// const actions = document.querySelectorAll('#counter button');
// console.log(actions[0].dataset.action);
const incrBtn = document.querySelector('[data-action="increment');
const decrrBtn = document.querySelector('[data-action="decrement');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrrBtn.addEventListener('click', () => {
  valueEl.textContent -= 1;
  counterValue -= 1;
});

incrBtn.addEventListener('click', () => {
  valueEl.textContent++;
  counterValue++;
});
