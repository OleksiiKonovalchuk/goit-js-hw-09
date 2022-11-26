function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

let colorID = null;
refs.stop.disabled = true;

const onStart = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  colorID = setInterval(function () {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.stop.toggleAttribute('disabled');
  refs.start.toggleAttribute('disabled');
};
const onStop = () => {
  refs.stop.toggleAttribute('disabled');
  refs.start.toggleAttribute('disabled');
  return clearInterval(colorID);
};

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
