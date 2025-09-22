function addTask() {
  const taskList = document.getElementById('taskList');
  const input = document.getElementById('inputTask');
  const taskText = input.value.trim();

  if (taskText === "") return; 

  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    newTask.remove();
  };

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    let newText = prompt("Edit your task:", newTask.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
      newTask.firstChild.textContent = newText;
    }
  };

  // Buttons ko li ke andar add karo
  newTask.appendChild(editBtn);
  newTask.appendChild(deleteBtn);

  taskList.appendChild(newTask);
  input.value = "";
}
