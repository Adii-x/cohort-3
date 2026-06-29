// Light & Dark mode

const themeBtn = document.querySelector(".theme-btn");
const icon = themeBtn.querySelector("i");

const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Logout

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {
  const res = confirm("Are you sure want to logout!!");

  if (!res) return;

  window.location.href = "login.html";
});

// Add transcation

const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn");
const cancelBtn = document.querySelector(".cancel-btn");

addBtn.addEventListener("click", () => {
  tForm.dataset.editingIndex = "";
  tAdd.textContent = "Add Transaction";
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Now adding things to DOM

const tAdd = document.querySelector("#transaction-add");
const tName = document.querySelector("#transactionName");
const tAmount = document.querySelector("#transactionAmount");
const tType = document.querySelector("#transactionType");
const tCategory = document.querySelector("#transactionCategory");
const tDate = document.querySelector("#transactionDate");
const tForm = document.querySelector("#transactionForm");
const conatiner = document.querySelector("#cont");
const currentBalance = document.querySelector("#currentBalance");
const totalIncome = document.querySelector("#totalIncome");
const totalExpense = document.querySelector("#totalExpense");
const totalSavings = document.querySelector("#totalSavings");
const cashChartCanvas = document.querySelector("#cashChart");

let taskList;
let cashChart;

try {
  taskList = JSON.parse(localStorage.getItem("Tasks") || "[]").filter(Boolean);
} catch (error) {
  taskList = [];
}

const del = (idx) => {
  if (taskList[idx]) {
    taskList.splice(idx, 1);
    localStorage.setItem("Tasks", JSON.stringify(taskList));
  }

  renderDashboard();
};

const edit = (idx) => {
  let obj = taskList[idx];
  tForm.dataset.editingIndex = String(idx);
  tAdd.textContent = "Update Transaction";

  tName.value = obj.taskName;
  tAmount.value = obj.taskAmount;
  tType.value = obj.taskType;
  tCategory.value = obj.taskCatrgory;
  tDate.value = obj.taskDate;

  overlay.style.display = "flex";
};

const ui = (arr) => {
  conatiner.innerHTML = "";

  arr.forEach((obj, idx) => {
    if (!obj) return;

    conatiner.innerHTML += `<tr>
            <td>${obj.taskDate}</td>
            <td>${obj.taskCatrgory}</td>
            <td><span class="badge ${obj.taskType === "Income" ? "income-badge" : "expense-badge"}">${obj.taskType}</span></td>
            <td class="${obj.taskType === "Income" ? "income-text" : "expense-text"}">${obj.taskType === "Income" ? `+$${obj.taskAmount}` : `-$${obj.taskAmount}`}</td>
            <td>
                <i onclick="edit(${idx})" class="fa-solid fa-pen edit"></i>
                <i onclick="del(${idx})" class="fa-solid fa-trash delete"></i>
            </td>
        </tr>`;
  });
};

const updateCards = (summary = getSummary()) => {
  const balance = summary.income - summary.expense;
  const savings = balance;

  currentBalance.textContent = `$${balance.toLocaleString()}`;
  totalIncome.textContent = `$${summary.income.toLocaleString()}`;
  totalExpense.textContent = `$${summary.expense.toLocaleString()}`;
  totalSavings.textContent = `$${savings.toLocaleString()}`;
};

const getSummary = () => {
  return taskList.reduce(
    (accumulator, task) => {
      if (!task) return accumulator;

      const amount = Number(task.taskAmount) || 0;

      if (task.taskType === "Income") {
        accumulator.income += amount;
      } else if (task.taskType === "Expense") {
        accumulator.expense += amount;
      }

      return accumulator;
    },
    { income: 0, expense: 0 },
  );
};

const updateChart = (summary = getSummary()) => {
  if (!cashChart) {
    cashChart = new Chart(cashChartCanvas, {
      type: "bar",
      data: {
        labels: ["Income", "Expense"],
        datasets: [
          {
            label: "Amount",
            data: [summary.income, summary.expense],
            backgroundColor: ["#22c55e", "#ef4444"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return;
  }

  cashChart.data.datasets[0].data = [summary.income, summary.expense];
  cashChart.update();
};

const renderDashboard = () => {
  const summary = getSummary();

  updateCards(summary);
  updateChart(summary);
  ui(taskList);
};

renderDashboard();

tForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = tName.value.trim();
  const taskAmount = tAmount.value;
  const taskType = tType.value;
  const taskCatrgory = tCategory.value;
  const taskDate = tDate.value;

  if (taskName === "" || taskAmount === "" || taskDate === "") {
    alert("Please fill all the fields!!");
    return;
  }

  const obj = {
    taskName,
    taskAmount,
    taskType,
    taskCatrgory,
    taskDate,
  };

  const editingIndex = tForm.dataset.editingIndex;

  if (editingIndex !== "" && editingIndex !== undefined) {
    taskList[Number(editingIndex)] = obj;
    tForm.dataset.editingIndex = "";
    tAdd.textContent = "Add Transaction";
  } else {
    taskList.push(obj);
  }

  localStorage.setItem("Tasks", JSON.stringify(taskList));

  console.log(taskList);

  tForm.reset();
  tForm.dataset.editingIndex = "";
  tAdd.textContent = "Add Transaction";

  overlay.style.display = "none";

  renderDashboard();
});
