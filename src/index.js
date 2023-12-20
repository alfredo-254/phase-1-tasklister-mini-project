document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}
});

function deleteTask(button) {
  // Get the parent <li> element of the clicked button
  const taskItem = button.parentElement;

  // Remove the task item from the task list
  taskList.removeChild(taskItem);
}