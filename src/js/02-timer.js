import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

startButton.addEventListener('click', startTimer);

startButton.setAttribute('disabled', '');

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
      checkDate(selectedDates[0]);
      return selectedDates[0];
  },
});

function checkDate(selectedDates) {
  selectedDates < new Date()
    ? alert('Please choose a date in the future')
    : startButton.removeAttribute('disabled');
}

function startTimer() {
    // startButton.setAttribute('disabled', '');
    // const { days, hours, minutes, seconds } = convertMs(selectedDates - new Date());
    // console.log(days);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
