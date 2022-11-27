import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']"),
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      return { position, delay };
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
const promisePostponer = (delay, step, amount) => {
  let newDelay = 0;
  for (let i = 1; i <= amount; i += 1) {
    newDelay = i === 1 ? delay : (newDelay += step);
    createPromise(i, newDelay);
  }
};
const onSubmit = e => {
  e.preventDefault();
  promisePostponer(
    Number(refs.delay.value),
    Number(refs.step.value),
    Number(refs.amount.value)
  );
};
refs.form.addEventListener('submit', onSubmit);
