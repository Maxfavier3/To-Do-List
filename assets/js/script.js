const inputTask = document.querySelector("#task_input");
const btnTask = document.querySelector("#task_btn");
const taskList = document.querySelector("#task_list");
const li = document.querySelectorAll("li");

btnTask.addEventListener("click", () => {
    if(inputTask.value === ""){
        alert("You must write something !")
    } else {
        const li = document.createElement("li");
        li.textContent = inputTask.value;
        taskList.appendChild(li);
        li.addEventListener("click", () => {
            li.classList.toggle("checked")
        })
    }
    inputTask.value = "";
})
