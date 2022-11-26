import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const todaysDate = new Date();
refs.start.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > todaysDate.getTime()) {
      return (refs.start.disabled = false);
    }

    Notiflix.Notify.failure('Please choose a date in the future', {
      timeout: 2000,
      position: 'center-center',
    });
    return (refs.start.disabled = true);
  },
  onChange(selectedDates) {
    localStorage.setItem(
      'date',
      selectedDates[0].getTime() - todaysDate.getTime()
    );
  },
};

flatpickr('#datetime-picker', options);
let dates = null;
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return (dates = { days, hours, minutes, seconds });
}
const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

const render = () => {
  if (localStorage.getItem('date') < 1000) {
    Notiflix.Confirm.show(
      'Woohoooo!!',
      'The time has come, my friend!',
      "Let's go!",
      "I'm ready!",
      { position: 'center-center' }
    );
    return clearInterval(renderedId);
  }
  const newStorage = localStorage.getItem('date') - 1000;
  convertMs(newStorage);
  refs.days.textContent = addLeadingZero(dates.days);
  refs.hours.textContent = addLeadingZero(dates.hours);
  refs.minutes.textContent = addLeadingZero(dates.minutes);
  refs.seconds.textContent = addLeadingZero(dates.seconds);
  localStorage.setItem('date', newStorage);
};
let renderedId = null;
const onStart = () => {
  refs.start.disabled = true;
  refs.input.disabled = true;
  return (renderedId = setInterval(render, 1000));
};

refs.start.addEventListener('click', onStart);
