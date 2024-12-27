const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', loadTasks);

function saveTasksToLocalStorage() {
    const tasks = Array.from(taskList.children).map(task => ({
        text: task.querySelector('span').textContent,
        completed: task.querySelector('span').classList.contains('completed')
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.text, task.completed));
}

function addTask(taskText, isCompleted = false) {
    if (!taskText) return;

    const li = document.createElement('li');
    li.className = 'task';

    const span = document.createElement('span');
    span.textContent = taskText;
    if (isCompleted) {
        span.classList.add('completed');
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        span.classList.toggle('completed');
        saveTasksToLocalStorage();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
        saveTasksToLocalStorage();
    });

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    saveTasksToLocalStorage();
}

addTaskButton.addEventListener('click', () => {
    addTask(taskInput.value.trim());
    taskInput.value = '';
});

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});
