// Retrieve the expenses from localStorage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Get the list element
const list = document.getElementById("list");

// Function to render the filtered list
function renderExpenses(filteredExpenses) {
  // Clear the existing list items
  list.innerHTML = "";

  if (filteredExpenses.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No expense/income found. Please add one!";
    emptyMessage.classList.add("empty-message"); // Add a class for styling
    list.appendChild(emptyMessage);
  } else {
    filteredExpenses.forEach((expense, index) => {
      const li = document.createElement("li");
      li.classList.add("expense-item"); // Add a class for styling
      
      li.innerHTML = `
        <div class="expense-details">
          <span class="expense-name">${expense.eventName}</span>
          <span class="expense-date">${expense.eventDate}</span>
        </div>
        <div class="expense-category">
      `; 
      
      if(expense.type == 'income') {
        li.innerHTML += `<span style="color:green;" class="expense-amount">+$${expense.amount}</span>
      </div>
      
      <button class="delete-btn" data-index="${index}">Delete</button>`;
      }

      else {
        li.innerHTML += `<span style="color: #e74c3c;;" class="expense-amount">-$${expense.amount}</span>
      </div>
      
      <button class="delete-btn" data-index="${index}">Delete</button>`;
      }
      
      list.appendChild(li);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        removeExpense(index);
      });
    });
  }
}

// Function to remove an expense
function removeExpense(index) {
  expenses.splice(index, 1); // Remove the expense from the array
  localStorage.setItem("expenses", JSON.stringify(expenses)); // Update localStorage
  renderExpenses(expenses); // Re-render the list
}

// Initial render of all expenses
renderExpenses(expenses);

// Filter logic
document.getElementById("filter-input").addEventListener("input", function () {
  applyFilters();
});

document
  .getElementById("category-filter")
  .addEventListener("change", function () {
    applyFilters();
  });

function applyFilters() {
  const filterValue = document
    .getElementById("filter-input")
    .value.toLowerCase();
  const categoryValue = document.getElementById("category-filter").value;

  const filteredExpenses = expenses.filter((expense) => {
    const matchesName = expense.eventName.toLowerCase().includes(filterValue);
    const matchesCategory =
      categoryValue === "all" || expense.type === categoryValue;

    return matchesName && matchesCategory;
  });

  renderExpenses(filteredExpenses);
}

// Button logic for add expense
document
  .getElementById("add-expense-btn")
  .addEventListener("click", function () {
    // Clear any previously saved expense (so the form resets)
    localStorage.removeItem("currentExpense");

    // Redirect to the add expense page
    window.location.href = "addExp.html"; // Update path if different
  });

document
  .getElementById("add-income-btn")
  .addEventListener("click", function () {
    // Clear any previously saved expense (so the form resets)
    localStorage.removeItem("currentExpense");
    // Redirect to the add expense page
    window.location.href = "addInc.html"; // Update path if different
  });
