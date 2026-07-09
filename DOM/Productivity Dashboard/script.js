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

const navBtns = document.querySelectorAll(".box");

const pages = {
  "dashboard-btn": "index.html",
  "todo-btn": "todo.html",
  "dailyPlanner-btn": "dailyPlanner.html",
  "pomodoro-btn": "pomodoro.html",
  "dailyGoals-btn": "dailyTasks.html",
};

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navBtns.forEach((btn) => {
  const page = pages[btn.id];

  btn.setAttribute("role", "button");
  btn.setAttribute("tabindex", "0");

  if (page && page === currentPage) {
    btn.classList.add("is-active");
  }

  btn.addEventListener("click", () => {
    if (page) window.location.href = page;
  });

  btn.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      btn.click();
    }
  });
});
