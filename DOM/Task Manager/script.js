const createBtn = document.querySelector('#create');
const formDiv = document.querySelector('.form');
const closeBtn = document.querySelector('#close');
const form = document.querySelector('form');
const popUpCreate = document.querySelector('#taskCreate');
const taskCont = document.querySelector('.taskCont');

const taskArr = [];


createBtn.addEventListener('click', () =>{

    formDiv.style.display = "flex";

})

closeBtn.addEventListener('click', () =>{

    formDiv.style.display = "none";

})

function comp(idx){

    taskArr[idx].completed = true;
    ui();

}

function dele(idx){
    taskArr.splice(idx, 1);
    ui();
}

let editTask = null;

function ed(idx){
    
    const obj = taskArr[idx];

    document.querySelector('#name').value = obj.taskName;
    document.querySelector('#info').value = obj.taskInfo;
    
    editTask = idx;

    formDiv.style.display = "flex";

}

const ui = () => {

    taskCont.innerHTML = "";

    taskArr.forEach((obj, idx) => {
        taskCont.innerHTML += `
            <div class="taskCard ${obj.completed ? "completed" : ""}">
                <div class="text">
                    <h2>${obj.taskName}</h2>
                    <p>${obj.taskInfo}</p>
                </div>
                <div class="btns">
                    <button onClick="ed(${idx})" id="edit">Edit</button>
                    <button onClick="comp(${idx})" id="complete">Complete</button>
                    <button onClick="dele(${idx})" id="delete">Delete</button>
                </div>
            </div>
        `
    })

}

form.addEventListener('submit', (e) =>{

    e.preventDefault();

    const taskName = e.target[0].value;
    const taskInfo = e.target[1].value;

    if(taskName.trim() === "" || taskInfo.trim() === ""){
        alert("Please fill the fields");
        return;
    }

    const obj = {
        taskName,
        taskInfo,
        completed: false
    };

    
    if(editTask === null){
        taskArr.push(obj);
    } else {
        taskArr[editTask].taskName = taskName;
        taskArr[editTask].taskInfo = taskInfo;

        editTask = null;
    }

    ui();

    form.reset();

    formDiv.style.display = "none";
})

// EVENT BUBBLING DEMO

const bubblingDiv = document.querySelector("#bubbling");
const bubbleBtn = document.querySelector("#bubbleBtn");
const propagationBox = document.querySelector(".propagation");

bubbleBtn.addEventListener("click", () => {
    console.log("Bubble Btn Clicked");
});

bubblingDiv.addEventListener("click", () => {
    console.log("Parent Div - Border Clicked");
});

propagationBox.addEventListener("click", () => {
    console.log("Grandparent Div - Conatinng All this propagation clicked");
});


// EVENT CAPTURING DEMO

const capturingDiv = document.querySelector("#capturing");
const captureBtn = document.querySelector("#captureBtn");

captureBtn.addEventListener(
    "click",
    () => {
        console.log("Button");
    },
    true
);

capturingDiv.addEventListener(
    "click",
    () => {
        console.log("Parent Div");
    },
    true
);

propagationBox.addEventListener(
    "click",
    () => {
        console.log("Grandparent Container");
    },
    true
);

// .value and getAttribuate 

const demoInp = document.querySelector("#demoInp");
const checkVal = document.querySelector("#checkVal");

checkVal.addEventListener("click", () => {

    console.log(".value -", demoInp.value);
    console.log("getAttribuate -" ,demoInp.getAttribute("value"));

});