function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

let timerId;
stopBtn.setAttribute('disabled', '');

function onClickStart() {
  tglAttribute();
  changeColor();
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setTimeout(changeColor, 1000);
}

function onClickStop() {
  clearTimeout(timerId);
  tglAttribute();
}

function tglAttribute() {
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}
