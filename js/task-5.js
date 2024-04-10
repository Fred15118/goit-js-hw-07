const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body: document.querySelector('body')
}
console.dir(refs.body)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function click() {
  const newBG = getRandomHexColor();
  refs.body.style.backgroundColor = newBG;
  refs.span.textContent = newBG;
}

refs.button.addEventListener('click',click) 