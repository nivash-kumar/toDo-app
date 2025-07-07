function updateClock() {
    const now = new Date();
    // Get time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;

    const timeString = `${hours}:${minutes}:${second} ${ampm}`;

    // Get date
    const dateString = now.toLocaleDateString('en-GB'); // format: dd/mm/yyyy

    // Get day
    const dayString = now.toLocaleDateString('en-GB', { weekday: 'long' }); // like Mon, Tue, etc.

    // Update HTML
    document.querySelector('.time').textContent = timeString;
    document.querySelector('.date').textContent = dateString;
    document.querySelector('.day').textContent = dayString;
}

// Run immediately and then every second
updateClock();
setInterval(updateClock, 1000);

let tasks = document.querySelector(".task-box .tasks");
let inputTask = document.querySelector("#add-task");
let addBtn = document.querySelector("#add-task-btn");

inputTask.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addBtn.click(); // Trigger the button click
    }
});

addBtn.addEventListener("click", function() {
    if (inputTask.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let task = document.createElement("li");
    task.classList.add("task", "flex");
    tasks.appendChild(task);

    let p = document.createElement("p");
    p.innerText = inputTask.value;
    inputTask.value = "";
    task.appendChild(p);

    let div = document.createElement("div");
    div.classList.add("task-work");
    task.appendChild(div);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("class", "task-check");
    div.appendChild(checkbox);

    let delBtn = document.createElement("button");
    delBtn.setAttribute("class", "task-btn");
    delBtn.innerText = "Delete";
    div.appendChild(delBtn);

    let timeDiv = document.createElement("div");
    timeDiv.classList.add("taskTime");
    timeDiv.classList.add("TSD");
    timeDiv.textContent = "complete time"; // initially empty
    task.appendChild(timeDiv);
});

function takeTime(){
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return `${hours}:${minutes} ${ampm}`;
}
tasks.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let task = event.target.closest("li");
        task.remove();
    } else if (event.target.nodeName === "INPUT") {
        let task = event.target.closest("li");
        let para = task.querySelector("p");
        let timeDiv = task.querySelector(".taskTime");
        let delBtn = task.querySelector("button");

        if (event.target.checked) {
            let compTime = takeTime();
                if(compTime){
                    console.log(`task time given ${compTime}`);
                    console.log(compTime);
                }else{
                    console.log(`task time not given ${compTime}`);
                }
            timeDiv.innerText = compTime ;
            timeDiv.classList.remove("taskTime");
            // para.style.textDecoration = "line-through";
            para.style.color = "green";
            event.target.parentElement.style.display = "none";
        } else {
            para.style.textDecoration = "none";
            delBtn.classList.remove("disabled-btn");
        }
    }
});


let addTasks = document.querySelector(".add");
let taskAddBtn = document.querySelector(".task-add-btn");
addTasks.addEventListener("click",()=>{
    console.log("btn clicked");
    if(taskAddBtn.style.display !="none"){
        console.log("add btn was clicked!");
        taskAddBtn.style.display ="content";
    }else{
        taskAddBtn.style.display ="none";
    }
})
