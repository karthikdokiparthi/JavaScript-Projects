document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task item
    const taskItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Event listener to remove the task
    deleteBtn.addEventListener('click', function () {
        taskItem.remove(); // Remove the task element from the DOM
    });

    // Add task text and delete button to the task item
    taskItem.textContent = taskText;
    taskItem.appendChild(deleteBtn);

    // Add the task item to the task list
    document.getElementById('taskList').appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
});
