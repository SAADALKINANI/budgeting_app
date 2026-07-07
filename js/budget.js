window.onload = function () {
  const spendInput = document.getElementById("spend");
  const saveInput = document.getElementById("save");
  const BudgetPerMonth = document.getElementById("BudgetPerMonth");

  // Load saved values if they exist
  const savedSpend = localStorage.getItem("spend");
  const savedSave = localStorage.getItem("save");
  const savedBudget = localStorage.getItem("BudgetPerMonth");

  if (savedSpend && savedSave && savedBudget) {
    savedBudget.value = savedBudget;
    spendInput.value = savedSpend;
    saveInput.value = savedSave;
  } else {
    BudgetPerMonth.value = 0; // Default budget
    spendInput.value = 80;
    saveInput.value = 20;
  }

  // Update Save when Spend changes
  spendInput.addEventListener("input", () => {
    let spendVal = parseInt(spendInput.value) || 0;
    spendVal = Math.min(Math.max(spendVal, 0), 100); // Clamp between 0-100
    saveInput.value = 100 - spendVal;
  });

  // Update Spend when Save changes
  saveInput.addEventListener("input", () => {
    let saveVal = parseInt(saveInput.value) || 0;
    saveVal = Math.min(Math.max(saveVal, 0), 100); // Clamp between 0-100
    spendInput.value = 100 - saveVal;
  });

  // Save button logic
  document.getElementById("save-btn").addEventListener("click", () => {
    const spendVal = parseInt(spendInput.value) || 0;
    const saveVal = parseInt(saveInput.value) || 0;
    const budgetVal = parseInt(BudgetPerMonth.value) || 0;

    if (spendVal + saveVal !== 100) {
      alert("Spend and Save must add up to 100%");
      return;
    }

    localStorage.setItem("spend", spendVal);
    localStorage.setItem("save", saveVal);
    localStorage.setItem("BudgetPerMonth", budgetVal);

    // Redirect or give confirmation
    window.location.href = "page1.html";
  });
};
