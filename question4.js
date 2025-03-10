// Task list (simulating a database)
let tasks = [];

// Create: Add a new task
function createTask(name, description) {
  const id = tasks.length + 1; // Generate an ID based on the current length
  const newTask = { id, name, description };
  tasks.push(newTask);
  console.log(`Task "${name}" created!`);
  return newTask;
}

// Read: Get all tasks
function getTasks() {
  if (tasks.length === 0) {
    console.log("No tasks available.");
  } else {
    console.log("Tasks:");
    tasks.forEach(task => {
      console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
  }
}

// Update: Update a task by ID
function updateTask(id, newName, newDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = newName;
    task.description = newDescription;
    console.log(`Task ID ${id} updated!`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Delete: Delete a task by ID
function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1); // Remove task from array
    console.log(`Task ID ${id} deleted!`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Example Usage
createTask("Learn JavaScript", "Study basics of JavaScript.");
createTask("Build a website", "Create a personal website with HTML, CSS, and JS.");
getTasks(); // Display all tasks
updateTask(1, "Learn Advanced JavaScript", "Study ES6+ features and async JS.");
deleteTask(2); // Delete task with ID 2
getTasks(); // Display all tasks after deletion
