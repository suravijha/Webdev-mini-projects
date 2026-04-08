let tasks = [];

function addTask() {
	const taskInput = document.getElementById("task-input");
	const taskText = taskInput.value.trim();

	if (taskText) {
		tasks.push({ text: taskText, completed: false });
		taskInput.value = "";
		renderTasks();
	}
}

function renderTasks() {
	const taskList = document.getElementById("task-list");
	taskList.innerHTML = "";

	tasks.forEach((task, index) => {
		const li = document.createElement("li");
		if (task.completed) {
			li.classList.add("completed");
		}
		li.innerHTML = `
    <span>${task.text}</span>
    <button class="delete-btn" onclick="deleteTask(event, ${index})">X</button>
`;
		li.addEventListener("click", () => {
			tasks[index].completed = !tasks[index].completed;
			renderTasks();
		});
		taskList.appendChild(li);
	});
}

function deleteTask(event, index) {
    event.stopPropagation();
	tasks.splice(index, 1);
	renderTasks();
}

document.getElementById("add-task-btn").addEventListener("click", addTask);

document
	.getElementById("task-input")
	.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			addTask();
		}
	});

document.getElementById("clear-completed-btn").addEventListener("click", () => {
	tasks = tasks.filter((task) => !task.completed);
	renderTasks();
});
