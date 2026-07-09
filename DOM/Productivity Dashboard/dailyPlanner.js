const dashboard = document.querySelector("#dashboard");

const plannerBody = document.querySelector(".planner-body");

// from 8 AM to 8 PM
const hours = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM"
];

// Load saved planner
const plannerData = JSON.parse(localStorage.getItem("dailyPlanner")) || {};

// Render slots
hours.forEach((hour, index) => {
    const slot = document.createElement("div");
    slot.className = "time-slot";

    slot.innerHTML = `
        <div class="slot-time">${hour}</div>

        <textarea
            data-index="${index}"
            placeholder="What's the plan?"
        >${plannerData[index] || ""}</textarea>

        <button class="clear-btn" data-index="${index}">
            <i class="ri-close-line"></i>
        </button>
    `;

    plannerBody.appendChild(slot);
});

// Save automatically whenever user types
document.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", (e) => {
        plannerData[e.target.dataset.index] = e.target.value;
        localStorage.setItem("dailyPlanner", JSON.stringify(plannerData));
    });
});

// Clear a single slot
document.querySelectorAll(".clear-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const index = e.currentTarget.dataset.index;

        delete plannerData[index];
        localStorage.setItem("dailyPlanner", JSON.stringify(plannerData));

        document.querySelector(
            `textarea[data-index="${index}"]`
        ).value = "";
    });
});