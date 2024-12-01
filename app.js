let timerInterval;
let elapsedTime = 0;

// formatTime(ms): Converts milliseconds into a mm:ss:ms format.
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  const milliseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

// startStopwatch(): Starts the timer and updates the display every 10ms.
function startStopwatch() {
  if (!timerInterval) {
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").textContent = formatTime(elapsedTime);
    }, 10);
  }
}

// stopStopwatch(): Pauses the timer.
function stopStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// resetStopwatch(): Resets the timer to zero.
function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
}