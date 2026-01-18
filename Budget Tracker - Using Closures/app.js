// --- MODULE 1: BUDGET CONTROLLER (Handles Data) ---
const budgetController = (function () {
  // 1. PRIVATE VARIABLES (The Closure)
  let totalMoney = 0;
  let expenses = [];

  // 2. PUBLIC INTERFACE
  return {
    addItem: function (desc, val) {
      // Convert string to number
      let numVal = parseFloat(val);

      // Validate input
      if (isNaN(numVal) || numVal === 0) return;

      // Push to private array
      expenses.push({ description: desc, value: numVal });

      // Update private total
      totalMoney += numVal;

      return totalMoney; // Return result for UI to use
    },

    getTotal: function () {
      return totalMoney;
    },
  };
})();

// --- MODULE 2: UI CONTROLLER (Handles DOM) ---
const uiController = (function () {
  // Private: Centralized DOM strings (Good practice!)
  const DOMstrings = {
    inputDesc: "#description",
    inputValue: "#value",
    addBtn: "#add-btn",
    outputLabel: "#output",
  };

  // Public
  return {
    getInput: function () {
      return {
        description: document.querySelector(DOMstrings.inputDesc).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    updateTotal: function (total) {
      document.querySelector(DOMstrings.outputLabel).textContent =
        "Total Budget: " + total;
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// --- MODULE 3: GLOBAL APP CONTROLLER (The Connector) ---
const controller = (function (budgetCtrl, uiCtrl) {
  const setupEventListeners = function () {
    const DOM = uiCtrl.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", ctrlAddItem);
  };

  const ctrlAddItem = function () {
    // 1. Get field input data
    const input = uiCtrl.getInput();

    // 2. Add item to the budget controller
    if (input.description !== "" && !isNaN(input.value)) {
      budgetCtrl.addItem(input.description, input.value);

      // 3. Calculate and Update Budget
      const total = budgetCtrl.getTotal();

      // 4. Display the budget on the UI
      uiCtrl.updateTotal(total);
    }
  };

  return {
    init: function () {
      console.log("Application has started.");
      setupEventListeners();
    },
  };
})(budgetController, uiController);

// Start the app
controller.init();
