const timerDisplay = document.querySelector("#timer-display");
const sessionType = document.querySelector("#session-type");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");
const durationBtns = document.querySelectorAll(".duration-btn");

let selectedMinutes = 25;
let timeLeft = selectedMinutes * 60;
let timer = null;

// Update Timer UI

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Start

startBtn.addEventListener("click", () => {
  if (timer) return;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      sessionType.textContent = "Session Completed 🎉";
      alert("Pomodoro Completed!");
    }
  }, 1000);
});

// Pause

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

// Reset

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  timeLeft = selectedMinutes * 60;
  sessionType.textContent = "Work Session";
  updateDisplay();
});

// Duration Selection

durationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    durationBtns.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
    selectedMinutes = Number(btn.dataset.time);
    timeLeft = selectedMinutes * 60;
    sessionType.textContent = `${selectedMinutes} Minute Work Session`;
    updateDisplay();
  });
});

updateDisplay();