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