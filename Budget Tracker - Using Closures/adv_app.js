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

    // Inside uiController return { ...

    addListItem: function(obj, type) {
        let html, newHtml, element;

        // 1. Create HTML string with placeholder text
        if (type === 'inc') {
            element = '.income__list';
            html = '<div class="item" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right"> <div class="item__value">+ %value%</div> </div> </div>';
        } else if (type === 'exp') {
            element = '.expenses__list';
            html = '<div class="item" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right"> <div class="item__value">- %value%</div> </div> </div>';
        }

        // 2. Replace the placeholder text with some actual data
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value);

        // 3. Insert the HTML into the DOM
        // 'beforeend' means: put it inside the list, but after the last item.
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    clearFields: function() {
        let fields, fieldsArr;

        // Select both input fields
        fields = document.querySelectorAll(DOMstrings.inputDesc + ', ' + DOMstrings.inputValue);

        // Convert the "NodeList" to an "Array" so we can loop over it
        fieldsArr = Array.prototype.slice.call(fields);

        // Clear each field
        fieldsArr.forEach(function(current, index, array) {
            current.value = "";
        });

        // Set focus back to the first field (description) for better UX
        fieldsArr[0].focus();
    },

// ... keep your other functions (getInput, getDOMstrings)

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

const ctrlAddItem = function() {
    // 1. Get the field input data
    const input = uiCtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
        
        // 2. Add the item to the budget controller
        const newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        // 3. Add the item to the UI (NEW!)
        uiCtrl.addListItem(newItem, input.type);

        // 4. Clear the fields (NEW!)
        uiCtrl.clearFields();
        
        // 5. Calculate and Update Budget (We will do this next)
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
