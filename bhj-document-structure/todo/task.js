const submitTask = document.getElementById('tasks__add');

function addTask(e) {

    if ((e.code === 'Enter' || this.textContent === "Добавить") & document.getElementById('task__input').value != "") {
        let taskText = document.getElementById('task__input').value;
        let newTask = document.createElement('div');
        let taskList = document.getElementById('tasks__list');
        newTask.classList.add('task');
        newTask.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`;
        taskList.appendChild(newTask);
        document.getElementById('task__input').value = "";
        let taskRemove = document.getElementsByClassName('task__remove')[Array.from(document.getElementsByClassName('task__remove')).length - 1];
        taskRemove.addEventListener('click', deleteTask);
    }

}

function deleteTask() {
    this.closest('div.task').remove();
}

submitTask.addEventListener('click', addTask);
document.addEventListener('keydown', addTask);