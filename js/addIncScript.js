// Set the date input to today's date by default
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("eventDate").valueAsDate = new Date();
});

// Update currency symbol (always use $)
document
  .getElementById("currency-select")
  .addEventListener("change", function () {
    document.getElementById("currency-symbol").textContent = "$";
  });

// Toggle custom repeat options when "Custom..." is selected
document
  .getElementById("repeatOptions")
  .addEventListener("change", function () {
    const customOptions = document.getElementById("customRepeatOptions");
    if (this.value === "custom") {
      customOptions.style.display = "block";
    } else {
      customOptions.style.display = "none";
    }
  });

// Custom repeat settings object
let customRepeatSettings = {
  frequencyType: "weekly",
  frequencyCount: 1,
  selectedDays: [2, 4], // Default selected days (Tuesday, Thursday)
};

// Handle cancel button click
document.querySelector(".cancel-button").addEventListener("click", function () {
  document.getElementById("customRepeatOptions").style.display = "none";
  document.getElementById("repeatOptions").value = "none";
});

// Handle OK button click
document.querySelector(".ok-button").addEventListener("click", function () {
  customRepeatSettings.frequencyType =
    document.getElementById("frequencyType").value;
  customRepeatSettings.frequencyCount =
    document.getElementById("frequencyCount").value;

  // Get selected days
  const selectedDays = [];
  document.querySelectorAll(".weekday.selected").forEach((day) => {
    selectedDays.push(parseInt(day.getAttribute("data-day")));
  });
  customRepeatSettings.selectedDays = selectedDays;

  document.getElementById("customRepeatOptions").style.display = "none";
});

// Toggle weekday selection
const weekdays = document.querySelectorAll(".weekday");
weekdays.forEach((day) => {
  day.addEventListener("click", function () {
    this.classList.toggle("selected");
  });
});

// Load saved expense data
window.addEventListener("DOMContentLoaded", function () {
  console.log("Loading saved expense data...");
  const savedExpense = JSON.parse(
    localStorage.getItem("currentExpense") || "{}"
  );
  console.log("Saved expense data:", savedExpense);

  if (savedExpense.eventName) {
    document.getElementById("eventName").value = savedExpense.eventName || "";
    document.getElementById("amount").value = savedExpense.amount || "";
    document.getElementById("currency-select").value = "USD";

    if (savedExpense.eventDate) {
      document.getElementById("eventDate").value = savedExpense.eventDate;
    }

    document.getElementById("repeatOptions").value =
      savedExpense.repeatOption || "none";

    if (savedExpense.repeatOption === "custom" && savedExpense.customRepeat) {
      document.getElementById("customRepeatOptions").style.display = "block";
      customRepeatSettings = savedExpense.customRepeat;

      document.getElementById("frequencyType").value =
        customRepeatSettings.frequencyType;
      document.getElementById("frequencyCount").value =
        customRepeatSettings.frequencyCount;

      document.querySelectorAll(".weekday").forEach((day) => {
        day.classList.remove("selected");
      });

      customRepeatSettings.selectedDays.forEach((dayIndex) => {
        const dayElement = document.querySelector(
          `.weekday[data-day="${dayIndex}"]`
        );
        if (dayElement) {
          dayElement.classList.add("selected");
        }
      });
    }

    document.getElementById("currency-symbol").textContent = "$";
    console.log("Form populated with saved data.");
  }
});

// Save button functionality
document.getElementById("saveButton").addEventListener("click", function () {
  const expenseData = {
    eventName: document.getElementById("eventName").value,
    amount: document.getElementById("amount").value,
    currency: document.getElementById("currency-select").value,
    eventDate: document.getElementById("eventDate").value,
    repeatOption: document.getElementById("repeatOptions").value,
    timestamp: new Date().getTime(),
    type: "income",
  };

  // Save to expenses array
  let expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  const currentExpenseStr = localStorage.getItem("currentExpense");

  if (currentExpenseStr && currentExpenseStr !== "{}") {
    const currentExpense = JSON.parse(currentExpenseStr);
    const editingIndex = expenses.findIndex(
      (exp) => exp.timestamp === currentExpense.timestamp
    );

    if (editingIndex !== -1) {
      expenses[editingIndex] = expenseData;
      console.log("Updated existing expense at index:", editingIndex);
    }
  }

  // Add custom repeat settings if applicable
  if (expenseData.repeatOption === "custom") {
    expenseData.customRepeat = customRepeatSettings;
  }

  // Save to localStorage
  localStorage.setItem("currentExpense", JSON.stringify(expenseData));
  console.log("Expense data saved:", expenseData);

  const editingIndex = expenses.findIndex(
    (exp) => exp.timestamp === expenseData.timestamp
  );
  if (editingIndex >= 0) {
    expenses[editingIndex] = expenseData;
    console.log("Updated existing expense at index:", editingIndex);
  } else {
    expenses.push(expenseData);
    console.log("Added new expense to array");
  }

  localStorage.setItem("expenses", JSON.stringify(expenses));
  window.location.href = "confirmation.html";
});
