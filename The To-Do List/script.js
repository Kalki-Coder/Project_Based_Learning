// --- CONFIGURATION & SELECTORS ---
const elements = {
  form: document.querySelector("#task-form"),
  input: document.querySelector(".task-input"),
  list: document.querySelector("#task-list"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  emptyState: document.querySelector("#empty-state"),
  progressFill: document.querySelector("#progress-fill"),
  progressLabel: document.querySelector("#progress-label"),
  toastContainer: document.querySelector("#toast-container"),
};

// --- STATE MANAGEMENT ---
let state = {
  tasks: [],
  filter: "all", // all, active, completed
};

// --- INITIALIZATION ---
function init() {
  loadData();
  render();
  setupEventListeners();
}

// --- DATA LOGIC ---
function saveData() {
  localStorage.setItem("godLevelTasks", JSON.stringify(state.tasks));
  render(); // Re-render on save to update counts/progress
}

function loadData() {
  const data = localStorage.getItem("godLevelTasks");
  if (data) state.tasks = JSON.parse(data);
}

function addTask(text) {
  const newTask = {
    id: crypto.randomUUID(),
    text: text,
    completed: false,
    createdAt: Date.now(),
  };
  state.tasks.unshift(newTask); // Add to top
  saveData();
  showToast("Task added successfully!");
}

function toggleTask(id) {
  const task = state.tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveData();
  }
}

function deleteTask(id) {
  state.tasks = state.tasks.filter((t) => t.id !== id);
  // Important: NOT clearing all local storage, only updating our key
  saveData();
  showToast("Task removed", "danger");
}

function editTask(id) {
  const task = state.tasks.find((t) => t.id === id);
  const newText = prompt("Edit your task:", task.text);
  if (newText !== null && newText.trim() !== "") {
    task.text = newText.trim();
    saveData();
  }
}

// --- RENDER LOGIC ---
function render() {
  // 1. Calculate Stats
  const total = state.tasks.length;
  const completed = state.tasks.filter((t) => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  // 2. Update Progress Bar
  elements.progressFill.style.width = `${percent}%`;
  elements.progressLabel.textContent = `${percent}% Done`;

  // 3. Filter Tasks
  let filteredTasks = state.tasks;
  if (state.filter === "active") filteredTasks = state.tasks.filter((t) => !t.completed);
  if (state.filter === "completed") filteredTasks = state.tasks.filter((t) => t.completed);

  // 4. Update DOM
  elements.list.innerHTML = "";
  
  if (filteredTasks.length === 0) {
    elements.emptyState.classList.remove("hidden");
  } else {
    elements.emptyState.classList.add("hidden");
    
    filteredTasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = `task-item ${task.completed ? "completed" : ""}`;
      li.setAttribute("data-id", task.id);

      // SECURITY NOTE: We use textContent for user input to prevent XSS
      li.innerHTML = `
        <div class="task-content">
          <div class="checkbox">
            ${task.completed ? '✔' : ''}
          </div>
          <span class="task-text"></span> 
        </div>
        <div class="actions">
          <button class="btn-action btn-edit" aria-label="Edit">✎</button>
          <button class="btn-action btn-delete" aria-label="Delete">🗑</button>
        </div>
      `;
      
      // Safe injection of user text
      li.querySelector(".task-text").textContent = task.text;
      
      elements.list.appendChild(li);
    });
  }
}

// --- UI UTILITIES ---
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  if (type === "danger") toast.style.backgroundColor = "#ef4444";
  
  elements.toastContainer.appendChild(toast);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // 1. Form Submit
  elements.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = elements.input.value.trim();
    if (text) {
      addTask(text);
      elements.input.value = "";
    } else {
      showToast("Please enter a task!", "danger");
    }
  });

  // 2. Event Delegation for List (Clicks on Delete, Edit, Toggle)
  elements.list.addEventListener("click", (e) => {
    // Traverse up to find the list item (in case they clicked an icon inside)
    const card = e.target.closest(".task-item");
    if (!card) return;
    
    const id = card.dataset.id;

    // Handle Delete
    if (e.target.closest(".btn-delete")) {
      deleteTask(id);
      return;
    }

    // Handle Edit
    if (e.target.closest(".btn-edit")) {
      editTask(id);
      return;
    }

    // Handle Toggle (Clicking anywhere else on the card)
    toggleTask(id);
  });

  // 3. Filters
  elements.filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all
      elements.filterBtns.forEach((b) => b.classList.remove("active"));
      // Add to clicked
      btn.classList.add("active");
      // Update State
      state.filter = btn.dataset.filter;
      render();
    });
  });
}

// Run the app
init();