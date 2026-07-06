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

/* Quote generation */

const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

async function setQuote() {
  const res = await fetch("https://dummyjson.com/quotes/random");
  const data = await res.json();
  quoteText.textContent = `"${data.quote}"`;
  quoteAuthor.textContent = `-- ${data.author}`;
}

setQuote();

/* Date and Time  */

const clock = document.querySelector("#clock");
const date = document.querySelector("#calander");

function updateClock() {
  const now = new Date();

  // Require components
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // Format numbers to always show two digits
  hr = String(hr).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");

  clock.textContent = `${hr} : ${min} : ${sec}`;
}

function updateDate() {
  const now = new Date();

  let dateNum = now.getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthName = months[now.getMonth()];
  let dayName = days[now.getDay()];

  date.textContent = `${dateNum} ${monthName} ${dayName}`;
}

updateClock();
updateDate();

// setInterval(() => {
//   updateClock();
//   updateDate();
// }, 1000);

