// Selection -
const inp = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoContainer = document.querySelector("#todo-list");

addBtn.addEventListener("click", () => {

  if (inp.value.trim() === "") return;

  // Creating elements
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  //Delete btn - 

  deleteBtn.addEventListener('click', (e) => {
    li.remove()
  })

  //Edit btn -

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit Todo", span.textContent);

        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
        }
    });

  //Setting classes to elements created
  span.setAttribute("class", "todo-text");
  div.setAttribute("class", "actions");
  editBtn.setAttribute("class", "edit-btn");
  deleteBtn.setAttribute("class", "delete-btn");

  //Setting text content -
  span.textContent = inp.value;
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  //Appending elements for making todo -
  div.append(editBtn, deleteBtn);
  li.append(span, div);


  todoContainer.append(li);

  inp.value = "";
});

inp.addEventListener('keydown', (e) =>{
    if(e.key === "Enter") addBtn.click();
})