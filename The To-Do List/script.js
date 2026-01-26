const user_input = document.querySelector(".task-input");
const add_button = document.querySelector(".addbtn");
const list = document.querySelector(".task-list");


// Logic Part

const list_data = function () {
  const tasks = [];
  const entered_task = {
    id: Date.now(),
    task: user_input.value.trim(),
    delete: "X"
  };
  tasks.push(entered_task);
}




add_button.addEventListener("click", function () {
  const taskvalue = user_input.value.trim();

  if (taskvalue != "") {
    const newtask = document.createElement("li");
    const dlt_button = document.createElement("button");
    dlt_button.textContent = "X";

    newtask.textContent = taskvalue;
    newtask.appendChild(dlt_button);
    list.appendChild(newtask);
    user_input.value = "";

    dlt_button.addEventListener("click", function () {
        list.removeChild(newtask);
    });
  } else {
    alert("please enter the task");
  }
});