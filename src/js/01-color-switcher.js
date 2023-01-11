startButton = document.querySelector('[data-start]');
stopBtn = document.querySelector('[data-stop]');
bodyEl = document.querySelector('body');
let intervalId = null;

startButton.addEventListener('click', onColorSwitcherStart);
stopBtn.addEventListener('click', onColorSwitcherStop);

function onColorSwitcherStart() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  startButton.disabled = true;
  stopBtn.disabled = false;

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onColorSwitcherStop() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
