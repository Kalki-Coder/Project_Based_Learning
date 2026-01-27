// --- 0. SELECT DOM ELEMENTS ---
// Grab the references to the HTML elements we need to interact with
const user_input = document.querySelector(".task-input");
const add_button = document.querySelector(".addbtn");
const list = document.querySelector(".task-list");

// --- 1. THE STATE (Data) ---
// This lives outside so it remembers everything.
// This array acts as our "Single Source of Truth."
let tasks = [];

// --- 2. THE LOGIC (Modify Data) ---
function addTask() {
  // Get value and remove extra whitespace from start/end
  const user_text = user_input.value.trim();

  // Validation: Ensure the user actually typed something
  if (user_text != "") {
    // Create a new task object
    const newTaskObj = {
      // Date.now() gives a unique number (timestamp) to use as an ID
      id: Date.now(),
      text: user_text,
    };

    // Push to our Database (Array)
    tasks.push(newTaskObj);

    // Clear the input field to prepare for the next entry
    user_input.value = "";

    // Update the screen now! (Sync View with Data)
    renderTask();
  } else {
    // Error handling
    alert("Task input is not defined");
  }
}

// --- 3. UI (Reflect Data) ---
// This function wipes the list and rebuilds it based on the array.
// It ensures the HTML always matches the 'tasks' array perfectly.
function renderTask() {
  // First clear the current HTML list (so we don't get duplicates)
  list.innerHTML = "";

  // Loop over each item of the saved data array
  tasks.forEach(function (task) {
    // Create a new list item (<li>)
    const li = document.createElement("li");

    // Inject HTML. Note the 'data-id=${task.id}'. 
    // We attach the ID to the HTML so we know which specific item to delete later.
    li.innerHTML = `
        <span>${task.text}</span>
        <button class="dlt_btn" data-id=${task.id}>X</button>
    `;

    // Add the new <li> to the actual <ul> in the DOM
    list.appendChild(li);
  });

  // IMPORTANT: Since we just destroyed and recreated the HTML buttons,
  // we must re-attach the event listeners to the new buttons.
  attchscanner();
}

// --- 4. EVENT LISTENERS (Interactions) ---
// This finds the delete buttons *after* they are rendered and watches for clicks
function attchscanner() {
  // Select all buttons with class 'dlt_btn' currently on the screen
  const dlt_btn = document.querySelectorAll(".dlt_btn");

  dlt_btn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // Retrieve the unique ID we stored in the HTML 'data-id' attribute
      // We convert it to a Number because HTML attributes are strings by default
      const idToDelete = Number(event.target.dataset.id);
      
      // Pass that ID to our logic function
      deleteTask(idToDelete);
    });
  });
}

// Logic to remove an item from the array
function deleteTask(id) {
  // We don't technically "delete"; we create a new array containing
  // everything EXCEPT the task with the matching ID.
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });

  // The array changed, so we must re-render the HTML to match
  renderTask();
}

// --- 5. INITIALIZATION ---
// Render once on load (useful if you later add LocalStorage)
renderTask();

// Listen for the main "Add" button click
add_button.addEventListener("click", addTask);