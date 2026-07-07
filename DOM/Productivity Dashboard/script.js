/* Light and Dark mode */

const main = document.querySelector("main");
const themeBtn = document.querySelector("#theme-btn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  main.setAttribute("data-theme", "dark");
  themeBtn.innerHTML = `<i class="ri-sun-line"></i>`;
} else {
  main.removeAttribute("data-theme");
  themeBtn.innerHTML = `<i class="ri-moon-line"></i>`;
}

function setTheme(theme) {
  if (theme === "light") {
    main.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = `<i class="ri-sun-line"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    main.removeAttribute("data-theme");
    themeBtn.innerHTML = `<i class="ri-moon-line"></i>`;
    localStorage.setItem("theme", "light");
  }
}

themeBtn.addEventListener("click", () => {
  const current = main.getAttribute("data-theme") === "dark" ? "dark" : "light";
  setTheme(current);
});


/* Navigation */

const navBtns = document.querySelectorAll('.box')

const pages = {
  "dashboard-btn": "index.html",
  "todo-btn": "todo.html",
  "dailyPlanner-btn": "dailyPlanner.html",
  "pomodoro-btn": "pomodoro.html",
  "dailyGoals-btn": "dailyPlanner.html",
};

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const page = pages[btn.id];
    if (page) window.location.href = page;
  });
});