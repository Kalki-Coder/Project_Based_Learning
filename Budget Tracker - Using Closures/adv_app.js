// --- MODULE 1: ADVANCED BUDGET CONTROLLER ---
const budgetController = (function () {
  // 1. THE CONSTRUCTORS (The Blueprints)
  // We capitalize the first letter to show it's a Constructor.

  const Expense = function (id, description, value) {
    // 'this' refers to the NEW object being created right now.
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // 2. THE DATA STRUCTURE
  // We now separate expenses and income.
  let data = {
    allItems: {
      exp: [], // Store Expense Objects here
      inc: [], // Store Income Objects here
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  // 3. PUBLIC INTERFACE
  return {
    addItem: function (type, des, val) {
      let newItem, ID;

      // Create new ID (Last ID + 1)
      // If array is empty, ID = 0.
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === "exp") {
        // The 'new' operator creates an empty object
        // and points 'this' to it.
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    // A helper purely for you to see the data in console
    testing: function () {
      console.log(data);
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
    inc_expSelector: "#type", //inputType will be a better name
  };

  // Public
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inc_expSelector).value,
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
    console.log("input received", input)

    // 2. Add item to the budget controller
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      const newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      console.log("Item added to data structure:", newItem);

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
