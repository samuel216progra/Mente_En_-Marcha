let minutes = 25;
let seconds = 0;
let timer;
let running = false;

function updateDisplay() {
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        running = false;
        alert('¡Tiempo completado! Tómate un descanso.');
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

updateDisplay();
