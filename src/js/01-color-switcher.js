function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.addEventListener('click', onClickStart);
stopButton.addEventListener('click', onClickStop);

let timerId;
stopButton.setAttribute('disabled', '');

function onClickStart(evt) {

  evt.currentTarget.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');
  
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000)
    
}

function onClickStop(evt) {
  clearInterval(timerId);
  startButton.removeAttribute('disabled');
  evt.currentTarget.setAttribute('disabled', '');
}


