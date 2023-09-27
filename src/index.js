document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("task-form");
  const taskList = document.getElementById("task-list");
  const addTaskButton = document.getElementById("add-task");
  const sortAscendingButton = document.getElementById("sort-ascending");
  const sortDescendingButton = document.getElementById("sort-descending");

  addTaskButton.addEventListener("click", addTask);
  sortAscendingButton.addEventListener("click", sortTasksAscending);
  sortDescendingButton.addEventListener("click", sortTasksDescending);

  function addTask() {
      const taskInput = document.getElementById("task");
      const userInput = document.getElementById("user");
      const durationInput = document.getElementById("duration");
      const dueDateInput = document.getElementById("dueDate");
      const priorityInput = document.getElementById("priority");

      const task = taskInput.value;
      const user = userInput.value;
      const duration = durationInput.value;
      const dueDate = dueDateInput.value;
      const priority = priorityInput.value;

      if (task.trim() === "") {
          alert("Please enter a task.");
          return;
      }

      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
          Task: ${task} <br>
          User: ${user} <br>
          Duration: ${duration} <br>
          Due Date: ${dueDate} <br>
          Priority: ${priority}
          <button class="delete">Delete</button>
      `;

      taskItem.classList.add(priority);

      taskList.appendChild(taskItem);

      taskInput.value = "";
      userInput.value = "";
      durationInput.value = "";
      dueDateInput.value = "";
  }

  taskList.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete")) {
          e.target.parentElement.remove();
      }
  });

  function sortTasksAscending() {
      const items = Array.from(taskList.children);
      items.sort((a, b) => {
          const priorityA = a.classList[0];
          const priorityB = b.classList[0];
          return priorityA.localeCompare(priorityB);
      });
      taskList.innerHTML = "";
      items.forEach(item => taskList.appendChild(item));
  }

  function sortTasksDescending() {
      const items = Array.from(taskList.children);
      items.sort((a, b) => {
          const priorityA = a.classList[0];
          const priorityB = b.classList[0];
          return priorityB.localeCompare(priorityA);
      });
      taskList.innerHTML = "";
      items.forEach(item => taskList.appendChild(item));
  }
});

