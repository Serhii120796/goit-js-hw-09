function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

let timerId;
stopBtn.setAttribute('disabled', '');

function onClickStart(evt) {

  evt.currentTarget.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000)
    
}

function onClickStop(evt) {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  evt.currentTarget.setAttribute('disabled', '');
}


