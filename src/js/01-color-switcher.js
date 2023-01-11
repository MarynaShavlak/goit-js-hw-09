stopBtn = document.querySelector('button[data-stop]');
startBtn = document.querySelector('button[data-start]');
bodyEl = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', onColorSwitcherStart);
stopBtn.addEventListener('click', onColorSwitcherStop);

function onColorSwitcherStart() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  startBtn.disabled = true;
  stopBtn.disabled = false;

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onColorSwitcherStop() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
