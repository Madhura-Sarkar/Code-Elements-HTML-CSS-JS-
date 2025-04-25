document.addEventListener("DOMContentLoaded", loadTasks);

const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const task = createTaskElement(taskText);
        taskList.appendChild(task);
        saveTaskToLocalStorage(taskText);
        taskInput.value = "";
    }
}

function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.innerText = taskText;

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", () => completeTask(li));

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(li));

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    return li;
}

function completeTask(taskElement) {
    taskElement.classList.toggle("completed");
    const taskText = taskElement.querySelector("span").innerText;
    updateTaskInLocalStorage(taskText, "completed", taskElement.classList.contains("completed"));
}

function deleteTask(taskElement) {
    taskElement.remove();
    const taskText = taskElement.querySelector("span").innerText;
    removeTaskFromLocalStorage(taskText);
}

function saveTaskToLocalStorage(taskText) {
    const tasks = getTasksFromLocalStorage();
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        const taskElement = createTaskElement(task.text);
        if (task.completed) {
            taskElement.classList.add("completed");
        }
        taskList.appendChild(taskElement);
    });
}

function updateTaskInLocalStorage(taskText, key, value) {
    const tasks = getTasksFromLocalStorage();
    const task = tasks.find(t => t.text === taskText);
    if (task) {
        task[key] = value;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function removeTaskFromLocalStorage(taskText) {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter(t => t.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
