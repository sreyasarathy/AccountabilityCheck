// Function to add a new task to the to-do list
function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var todoList = document.getElementById("todo-list");

    // Create a new task item
    var taskItem = document.createElement("li");
    taskItem.classList.add("todo-item");

    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    // Create a span for the task text
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Append checkbox and task text to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);

    // Append the task item to the to-do list
    todoList.appendChild(taskItem);

    // Clear the task input
    taskInput.value = "";
  }
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  addTask();
}

// Add event listener to the form for form submission
var form = document.getElementById("task-form");
form.addEventListener("submit", handleSubmit);
