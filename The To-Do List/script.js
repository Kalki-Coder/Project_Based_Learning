const user_input = document.querySelector(".task-input");
const add_button = document.querySelector(".addbtn");
const list = document.querySelector(".task-list");

// --- 1. THE STATE (Data) ---
// This lives outside so it remembers everything.
let tasks = [];

// --- 2. THE LOGIC (Modify Data) ---
function addTask() {
  const user_text = user_input.value.trim();
  if (user_text != "") {
    const newTaskObj = {
      id: Date.now(),
      text: user_text,
    };
    // Push to our Database (Array)
    tasks.push(newTaskObj);
    // Clear the input for new entry
    user_input.value = "";
    // Update the screen now!
    renderTask();
  } else {
    alert("task input is not defined");
  }
}

// UI (Reflect Data)
// this function wipes the list and rebuilds it based on the array
function renderTask() {
  // first clear the current HTML list (so we don't get the dublicates)
  list.innerHTML = "";
  // loop over each item of the saved data array
  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task.text}</span>
    <button class="dlt_btn" data-id=${task.id}>X</button>`;
    list.appendChild(li);
  });
  attchscanner();
}

function attchscanner() {
  const dlt_btn = document.querySelectorAll(".dlt_btn");

  dlt_btn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const idToDelete = Number(event.target.dataset.id);
      deleteTask(idToDelete);
    });
  });
}

function deleteTask(id) {
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  renderTask();
}

renderTask();

add_button.addEventListener("click", addTask);
