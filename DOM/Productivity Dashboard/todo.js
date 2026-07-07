/* Tags selection */
const todoContainer = document.querySelector("#todo-list");
const addBtn = document.querySelector("#add-task");
const taskInp = document.querySelector("#task-input");

/* functions */

function ui(arr) {
  const theme = localStorage.getItem("theme");
  todoContainer.innerHTML = "";

  arr.forEach((obj, idx) => {
    todoContainer.innerHTML += ` <li class="task ${obj.isImportant ? "important" : ""} 
                                ${obj.isCompleted ? "completed" : ""} ">

                                    <div class="task-left">

                                    <span class="task-text">
                                        ${obj.task}
                                    </span>

                                    </div>

                                    <div class="task-actions">

                                        <button onclick="isImp(${idx})" class="important-btn">
                                            ${obj.isImportant ? '<i class="ri-star-fill"></i>' : '<i class="ri-star-line"></i>'}
                                        </button>

                                        <button onclick="isComp(${idx})" class="complete-btn">
                                            <i class="ri-check-line"></i>
                                        </button>

                                        <button onclick="del(${idx})" class="delete-btn">
                                            <i class="ri-delete-bin-6-line"></i>
                                        </button>

                                    </div>
                                </li>`;
  });
}

function del(idx) {
  todos.splice(idx, 1);

  localStorage.setItem("todos", JSON.stringify(todos));

  ui(todos);
}

function isImp(idx) {
  todos[idx].isImportant = !todos[idx].isImportant;

  localStorage.setItem("todos", JSON.stringify(todos));

  ui(todos);
}

function isComp(idx) {
  todos[idx].isCompleted = !todos[idx].isCompleted;

  localStorage.setItem("todos", JSON.stringify(todos));

  ui(todos);
}

/* Todo array */

let todos = JSON.parse(localStorage.getItem("todos") ?? "[]");

/* Default render */

ui(todos);

/* Functionality */

addBtn.addEventListener("click", () => {
  const task = taskInp.value.trim();

  if (!task) {
    alert("Please add the task!!");
    return;
  }

  const obj = {
    task,
    isCompleted: false,
    isImportant: false,
  };

  todos.push(obj);

  localStorage.setItem("todos", JSON.stringify(todos));

  taskInp.value = "";

  ui(todos);
});
