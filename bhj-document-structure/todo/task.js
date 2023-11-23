"use strict";

const tasksInput = document.getElementById("task__input");
const tasksAddButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function taskAdd(evt) {
    if (tasksInput.value.trim() !== "") { 

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

	evt.preventDefault();
}

tasksAddButton.addEventListener("click", taskAdd);

tasksList.addEventListener("click", function(event) {
    if (event.target.classList.contains("task__remove")) {
        event.target.parentElement.remove();
    }
});
