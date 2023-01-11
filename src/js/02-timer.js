import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const datetimePickerEl = document.querySelector('#datetime-picker');

const timerDaysEl = document.querySelector('[data-days]');
const timerHoursEl = document.querySelector('[data-hours]');
const timerMinutesEl = document.querySelector('[data-minutes]');
const timerSecondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;
datetimePickerEl.disabled = false;
let selectedDate;

Notify.init({
  width: '300px',
  position: 'center-top',
  showOnlyTheLastOne: true,
  clickToClose: true,
  fontSize: '20px',
});

flatpickr(datetimePickerEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose: checkSelectedDate,
});

class Timer {
  constructor({ onTick }) {
    this.deadline = selectedDate;
    this.intervalId = null;
    this.onTick = onTick;
  }

  start() {
    startBtn.disabled = true;
    datetimePickerEl.disabled = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const diff = this.deadline - currentTime;

      if (diff <= 0) {
        this.stop();
        return;
      }
      const timeLeftComponents = this.convertMs(diff);
      this.onTick(timeLeftComponents);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }
}

const timer = new Timer({ onTick: updateTimerface });
startBtn.addEventListener('click', timer.start.bind(timer));

function checkSelectedDate(dates) {
  selectedDate = dates[0].getTime();
  const currentDate = Date.now();

  if (selectedDate < currentDate) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  timer.deadline = selectedDate;
  startBtn.disabled = false;
}

function updateTimerface({ days, hours, minutes, seconds }) {
  timerDaysEl.textContent = this.addLeadingZero(days);
  timerHoursEl.textContent = this.addLeadingZero(hours);
  timerMinutesEl.textContent = this.addLeadingZero(minutes);
  timerSecondsEl.textContent = this.addLeadingZero(seconds);
}
