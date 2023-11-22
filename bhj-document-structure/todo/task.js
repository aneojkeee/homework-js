"use strict";

const tasksInput = document.getElementById("task__input");
const tasksAddButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function taskAdd() {
    if (tasksInput.value.trim() !== "") { 
        event.preventDefault();

        tasksList.insertAdjacentHTML("beforeend", `
            <div class="task">
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`
        );

        tasksInput.value = "";
    }
}

tasksAddButton.addEventListener("click", taskAdd);

tasksInput.addEventListener("keydown", event => {
    if (event.key === 13) {
        taskAdd();
    }
});

tasksList.addEventListener("click", function(event) {
    if (event.target.classList.contains("task__remove")) {
        event.target.parentElement.remove();
    }
});
