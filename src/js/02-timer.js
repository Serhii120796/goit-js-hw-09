import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

startButton.setAttribute('disabled', '');
startButton.addEventListener('click', startTimer);

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates[0]);
  },
});

let selectedDate;

function checkDate(date) {
  if (date < new Date()) {
    alert('Please choose a date in the future');
    return;
  }
  selectedDate = date;
  startButton.removeAttribute('disabled');
}

function startTimer(evt) {
  evt.target.setAttribute('disabled', '');

  formatTime();
  const timerId = setInterval(() => {
    if (new Date() > selectedDate) {
      clearInterval(timerId);
      return;
    }
    formatTime();
  }, 1000);
}

function formatTime() {
  const { days, hours, minutes, seconds } = convertMs(
    selectedDate - new Date()
  );
  timerDays.textContent = addLeadingZero(days);
  timerHours.textContent = addLeadingZero(hours);
  timerMinutes.textContent = addLeadingZero(minutes);
  timerSeconds.textContent = addLeadingZero(seconds);
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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
