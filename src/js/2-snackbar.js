import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.delay.value);
  const state = form.state.value;

  createPromise(delay, state)
    .then(message => {
      iziToast.success({
        title: 'OK',
        message,
        backgroundColor: '#59a10d',
        position: 'topRight',
      });
    })
    .catch(message => {
      iziToast.error({
        title: 'Error',
        message,
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Illegal operation ${delay}ms`);
      }
    }, delay);
  });
}
