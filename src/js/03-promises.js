import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '300px',
  position: 'right-top',

  fontSize: '16px',
  timeout: 5000,
});

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);
let position = 1;

function onFormSubmit(e) {
  e.preventDefault();
  const { delay: firstDelay, step, amount } = getValuesFromForm(e);

  let delay = firstDelay;

  for (position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
}

function getValuesFromForm(e) {
  let data = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => {
    data[name] = Number(value);
  });
  return data;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
