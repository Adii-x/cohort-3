const goalInput = document.querySelector("#goal-input");
const addGoalBtn = document.querySelector("#add-goal");
const goalList = document.querySelector(".goal-list");
const progress = document.querySelector("#progress");

let goals = JSON.parse(localStorage.getItem("dailyGoals")) || [];

/* Functions */

function saveGoals() {
  localStorage.setItem("dailyGoals", JSON.stringify(goals));
}

function updateProgress() {
  const completed = goals.filter((goal) => goal.completed).length;
  progress.textContent = `${completed} / ${goals.length} Completed`;
}

function renderGoals() {
  goalList.innerHTML = "";

  goals.forEach((goal, index) => {
    goalList.innerHTML += `
      <div class="goal ${goal.completed ? "completed" : ""}" data-index="${index}">
        <div class="goal-left">

          <input
            type="checkbox"
            class="goal-check"
            ${goal.completed ? "checked" : ""}
          >

          <span class="goal-text">
            ${goal.text}
          </span>

        </div>

        <button class="delete-goal">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    `;
  });

  updateProgress();
}

/* Add Goal */

addGoalBtn.addEventListener("click", () => {
  const text = goalInput.value.trim();

  if (text === "") return;

  goals.push({
    text,
    completed: false,
  });

  saveGoals();
  renderGoals();

  goalInput.value = "";
});

goalInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addGoalBtn.click();
  }
});

/* Event Delegation */

goalList.addEventListener("click", (e) => {
  const goal = e.target.closest(".goal");

  if (!goal) return;

  const index = goal.dataset.index;

  // Delete Goal
  if (e.target.closest(".delete-goal")) {
    goals.splice(index, 1);

    saveGoals();
    renderGoals();
  }

  // Toggle Completed
  if (e.target.classList.contains("goal-check")) {
    goals[index].completed = e.target.checked;

    saveGoals();
    renderGoals();
  }
});

/* Initial Render */

renderGoals();
