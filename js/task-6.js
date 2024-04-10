const refs = {
  boxesContainer: document.querySelector('#boxes'),
  controlesContainer: document.querySelector('#controls'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]')
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = refs.controlesContainer.firstElementChild.valueAsNumber;
  if (amount > 100) {
    refs.controlesContainer.firstElementChild.value = '';
    return
  }
  let size = 30;
  const res = [];

  for (let i = 0; i <= amount - 1; i+=1) {
    const color = getRandomHexColor();

    res[i] = `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;

    size += 10;
  }
  const result = res.join('');
  refs.boxesContainer.innerHTML = result;
  refs.controlesContainer.firstElementChild.value = '';
}

function destroyBoxes() {
  const res = '';
  refs.boxesContainer.innerHTML = res;
}

refs.createButton.addEventListener('click',createBoxes)
refs.destroyButton.addEventListener('click',destroyBoxes)