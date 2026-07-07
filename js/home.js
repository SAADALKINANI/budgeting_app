/* temporary prefilled month data */
const monthData = {
  January: {
    budget: 2800,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-01-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 300,
    available: 700,
    daily: 32,
    transactions: [
      { name: "Rent", date: "January 5", amount: 900 },
      { name: "Internet", date: "January 12", amount: 65 },
      { name: "Gym Membership", date: "January 15", amount: 50 },
    ],
  },
  February: {
    budget: 2900,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-02-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 350,
    available: 500,
    daily: 25,
    transactions: [
      { name: "Rent", date: "February 5", amount: 900 },
      { name: "Internet", date: "February 12", amount: 65 },
      { name: "Car Insurance", date: "February 20", amount: 142.5 },
    ],
  },
  March: {
    budget: 2950,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-03-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 400,
    available: 750,
    daily: 35,
    transactions: [
      { name: "Rent", date: "March 5", amount: 900 },
      { name: "Electricity Bill", date: "March 15", amount: 78.5 },
      { name: "Phone Bill", date: "March 18", amount: 59.99 },
    ],
  },
  April: {
    budget: parseFloat(localStorage.getItem("BudgetPerMonth") || 0),
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-04-") && e.type?.includes("expense")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 450,
    available: JSON.parse(localStorage.getItem("income") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-03-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    daily: 47,
    transactions: JSON.parse(localStorage.getItem('expenses') || '[]')
      .filter(e => e.eventDate?.includes('-04-') && e.type?.includes('expense'))
      .map(e => ({
        name: e.eventName,
        date: new Date(e.eventDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
        amount: parseFloat(e.amount || 0)
      })),
  },
  May: {
    budget: 3100,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-05-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 500,
    available: 2100,
    daily: 70,
    transactions: [],
  },
  June: {
    budget: 3200,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-06-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 550,
    available: 2400,
    daily: 80,
    transactions: [
      { name: "Rent", date: "June 5", amount: 900 },
      { name: "Electricity Bill", date: "June 15", amount: 95 },
      { name: "Car Payment", date: "June 28", amount: 350 },
    ],
  },
  July: {
    budget: 3300,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-07-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 600,
    available: 1800,
    daily: 58,
    transactions: [
      { name: "Rent", date: "July 5", amount: 900 },
      { name: "Internet", date: "July 12", amount: 65 },
      { name: "Phone Bill", date: "July 18", amount: 59.99 },
    ],
  },
  August: {
    budget: 3300,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-08-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 500,
    available: 1300,
    daily: 42,
    transactions: [
      { name: "Rent", date: "August 5", amount: 900 },
      { name: "Car Insurance", date: "August 22", amount: 142.5 },
      { name: "Gym Membership", date: "August 15", amount: 50 },
    ],
  },
  September: {
    budget: 3200,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-09-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 550,
    available: 1600,
    daily: 53,
    transactions: [
      { name: "Rent", date: "September 5", amount: 900 },
      { name: "Electricity Bill", date: "September 15", amount: 82 },
      { name: "Internet", date: "September 12", amount: 65 },
    ],
  },
  October: {
    budget: 3100,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-10-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 300,
    available: 600,
    daily: 20,
    transactions: [
      { name: "Rent", date: "October 5", amount: 900 },
      { name: "Phone Bill", date: "October 18", amount: 59.99 },
      { name: "Car Payment", date: "October 28", amount: 350 },
    ],
  },
  November: {
    budget: 3200,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-11-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 500,
    available: 1300,
    daily: 43,
    transactions: [
      { name: "Rent", date: "November 5", amount: 900 },
      { name: "Internet", date: "November 12", amount: 65 },
      { name: "Car Insurance", date: "November 22", amount: 142.5 },
    ],
  },
  December: {
    budget: 3500,
    spent: JSON.parse(localStorage.getItem("expenses") || "[]").reduce(
      (sum, e) =>
        e.eventDate?.includes("-12-")
          ? parseFloat(sum) + parseFloat(e.amount || 0)
          : sum,
      0
    ),
    saved: 350,
    available: 700,
    daily: 23,
    transactions: [
      { name: "Rent", date: "December 5", amount: 900 },
      { name: "Electricity Bill", date: "December 15", amount: 90 },
      { name: "Holiday Shopping", date: "December 20", amount: 500 },
    ],
  },
};



const scrollContainer = document.getElementById('month-scroll');
const btnNext = document.getElementById('month-next');
const btnPrev = document.getElementById('month-prev');

function scrollByThreeMonths(direction) {
  const months = Array.from(scrollContainer.querySelectorAll('.month'));
  const containerRect = scrollContainer.getBoundingClientRect();

  // Find first month that's partially visible on the left
  let firstVisibleIndex = months.findIndex(month => {
    const rect = month.getBoundingClientRect();
    return rect.right > containerRect.left;
  });

  if (firstVisibleIndex === -1) return;

  // Get width of next 3 months (or previous 3)
  let scrollAmount = 0;
  if (direction === 'next') {
    for (let i = firstVisibleIndex; i < firstVisibleIndex + 3 && i < months.length; i++) {
      scrollAmount += months[i].offsetWidth + 10;
    }
  } else {
    for (let i = firstVisibleIndex - 3; i < firstVisibleIndex; i++) {
      if (i >= 0) scrollAmount += months[i].offsetWidth + 10;
    }
    scrollAmount *= -1;
  }

  scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

btnNext.addEventListener('click', () => scrollByThreeMonths('next'));
btnPrev.addEventListener('click', () => scrollByThreeMonths('prev'));



function generateRecurringTransactions(startDate = new Date()) {
  const transactions = JSON.parse(localStorage.getItem("expenses") || "[]");
  const recurringTransactions = transactions.filter(
    (trans) => trans.repeatOption !== "none"
  );

  const estimationData = {};
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /* empty months */
  for (let i = 0; i < 12; i++) {
    const date = new Date(startDate);
    date.setMonth(startDate.getMonth() + i);
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const monthKey = `${monthName} ${year}`;

    estimationData[monthKey] = {
      transactions: [],
    };
  }

  // Process each recurring transaction (expense or income)
  recurringTransactions.forEach((transaction) => {
    const startDate = new Date(transaction.eventDate);
    const amount = parseFloat(transaction.amount);

    // Handle each repeat option
    switch (transaction.repeatOption) {
      case "daily":
        addDailyTransactions(estimationData, transaction, startDate, amount);
        break;
      case "weekly":
        addWeeklyTransactions(estimationData, transaction, startDate, amount);
        break;
      case "biweekly":
        addBiweeklyTransactions(estimationData, transaction, startDate, amount);
        break;
      case "monthly":
        addMonthlyTransactions(estimationData, transaction, startDate, amount);
        break;
      case "custom":
        addCustomTransactions(estimationData, transaction, startDate, amount);
        break;
    }
  });

  return estimationData;
}

function addTransactionToMonth(estimationData, date, transaction, amount) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const monthKey = `${monthName} ${year}`;

  if (estimationData[monthKey]) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric'
    });
    
    estimationData[monthKey].transactions.push({
      name: transaction.eventName,
      date: formattedDate,
      amount: amount,
      recurring: true,
      category: transaction.category ||
        (transaction.type === 'income' ? 'Income' : 'Expense'),
      type: transaction.type || 'expense', // Default to expense if not specified
      originalDate: new Date(transaction.eventDate)
    });
  }
}


function addDailyTransactions(estimationData, transaction, startDate, amount) {
  
  const currentDate = new Date();
  let date = new Date(Math.max(startDate.getTime(), currentDate.getTime()));

  
  const endDate = new Date(currentDate);
  endDate.setFullYear(endDate.getFullYear() + 1);

  while (date <= endDate) {
    addTransactionToMonth(estimationData, date, transaction, amount);

    date = new Date(date);
    date.setDate(date.getDate() + 1);
  }
}

function addWeeklyTransactions(estimationData, transaction, startDate, amount) {
  const currentDate = new Date();
  let date = new Date(Math.max(startDate.getTime(), currentDate.getTime()));

  const endDate = new Date(currentDate);
  endDate.setFullYear(endDate.getFullYear() + 1);

  while (date <= endDate) {
    addTransactionToMonth(estimationData, date, transaction, amount);

    date = new Date(date);
    date.setDate(date.getDate() + 7);
  }
}

function addBiweeklyTransactions(
  estimationData,
  transaction,
  startDate,
  amount
) {
  const currentDate = new Date();
  let date = new Date(Math.max(startDate.getTime(), currentDate.getTime()));

  const endDate = new Date(currentDate);
  endDate.setFullYear(endDate.getFullYear() + 1);

  while (date <= endDate) {
    addTransactionToMonth(estimationData, date, transaction, amount);

    date = new Date(date);
    date.setDate(date.getDate() + 14);
  }
}

function addMonthlyTransactions(
  estimationData,
  transaction,
  startDate,
  amount
) {
  const currentDate = new Date();
  let date = new Date(Math.max(startDate.getTime(), currentDate.getTime()));

  const endDate = new Date(currentDate);
  endDate.setFullYear(endDate.getFullYear() + 1);

  while (date <= endDate) {
    addTransactionToMonth(estimationData, date, transaction, amount);

    date = new Date(date);
    date.setMonth(date.getMonth() + 1);
  }
}

function addCustomTransactions(estimationData, transaction, startDate, amount) {
  if (!transaction.customRepeat) return;

  const currentDate = new Date();
  let date = new Date(Math.max(startDate.getTime(), currentDate.getTime()));

  const endDate = new Date(currentDate);
  endDate.setFullYear(endDate.getFullYear() + 1);

  const frequencyType = transaction.customRepeat.frequencyType;
  const frequencyCount = parseInt(transaction.customRepeat.frequencyCount) || 1;
  const selectedDays = transaction.customRepeat.selectedDays || [];

  if (frequencyType === "daily") {
    while (date <= endDate) {
      addTransactionToMonth(estimationData, date, transaction, amount);

      /* every set days */
      date = new Date(date);
      date.setDate(date.getDate() + frequencyCount);
    }
  } else if (frequencyType === "weekly") {
    if (selectedDays.length === 0) {
      while (date <= endDate) {
        addTransactionToMonth(estimationData, date, transaction, amount);

        date = new Date(date);
        date.setDate(date.getDate() + 7 * frequencyCount);
      }
    } else {
      let current = new Date(date);

      while (current <= endDate) {
        const currentDayOfWeek = current.getDay();

        // Check if this day is in our selected days
        if (selectedDays.includes(currentDayOfWeek)) {
          addTransactionToMonth(estimationData, current, transaction, amount);
        }

        // Increment to next day
        current = new Date(current);
        current.setDate(current.getDate() + 1);

        // Reset count after reaching week's end
        const startDayOfWeek = date.getDay();
        if (
          current.getDay() === startDayOfWeek &&
          current.getTime() - date.getTime() >=
            7 * frequencyCount * 24 * 60 * 60 * 1000
        ) {
          date = new Date(current);
        }
      }
    }
  } else if (frequencyType === "monthly") {
  
    while (date <= endDate) {
      addTransactionToMonth(estimationData, date, transaction, amount);

      date = new Date(date);
      date.setMonth(date.getMonth() + frequencyCount);
    }
  } else if (frequencyType === "yearly") {
    while (date <= endDate) {
      addTransactionToMonth(estimationData, date, transaction, amount);

      date = new Date(date);
      date.setFullYear(date.getFullYear() + frequencyCount);
    }
  }
}

function updateDashboardWithEstimations(month, year) {
  const monthKey = `${month} ${year}`;

  const data = monthData[month] || {
    budget: 0,
    spent: 0,
    saved: 0,
    available: 0,
    daily: 0,
    transactions: [],
  };

  const estimationData = generateRecurringTransactions();
  const estimatedTransactions = estimationData[monthKey]?.transactions || [];

  const allTransactions = [...data.transactions];

  let estimatedIncome = 0;
  let estimatedExpenses = 0;

  estimatedTransactions.forEach((transaction) => {
    const isDuplicate = allTransactions.some(
      (t) => t.name === transaction.name && t.date === transaction.date
    );

    if (!isDuplicate) {
      allTransactions.push({
        ...transaction,
        estimated: true,
      });

      // Track income vs expenses
      if (transaction.type === "income") {
        estimatedIncome += transaction.amount;
      } else {
        estimatedExpenses += transaction.amount;
      }
    }
  });

  // Calculate totals (considering income)
  const totalSpent = data.spent + estimatedExpenses;
  // Add estimated income to available balance
  const available = data.budget - totalSpent + estimatedIncome;

  // Return the combined data
  return {
    ...data,
    transactions: allTransactions,
    spent: totalSpent,
    available: available,
    estimatedIncome: estimatedIncome,
    daily: available > 0 ? Math.floor(available / 30) : 0,
    containsEstimations: estimatedTransactions.length > 0,
  };
}

function updateDashboard(month) {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Get data with estimations
  const data = updateDashboardWithEstimations(month, currentYear);
  const save = parseFloat(localStorage.getItem("save"));
  const spend = parseFloat(localStorage.getItem("spend"));
  //test

  const totalGoalSavings =
    JSON.parse(localStorage.getItem("totalGoalSavings")) || 0;

  console.log(totalGoalSavings);

  const usedBudget = data.spent + totalGoalSavings;
  const savedAmt = totalGoalSavings;
  const spentAmt = parseFloat(data.spent);
  const budgetAmt = data.budget;

  console.log("spentAmt", spentAmt);
  console.log("savedAmt", savedAmt);
  console.log("budgetAmt", budgetAmt);
  console.log("Saved", totalGoalSavings);
  console.log(0.01 * save * data.available);
  console.log(data.available);

  document.getElementById("spent-amount").textContent = `$${spentAmt} spent`;
  document.getElementById("saved-amount").textContent = `$${savedAmt} saved`;
  document.getElementById("budget-amount").textContent = `$${budgetAmt} budget`;
  const progressPercentage = ((spentAmt + totalGoalSavings) / budgetAmt) * 100;
  document.getElementById(
    "progress-fill"
  ).style.width = `${progressPercentage}%`;

  const available = data.budget - usedBudget; /* remaining funds */

  document.getElementById("total-saved").textContent = `$${
    budgetAmt - data.spent - totalGoalSavings
  }`;
  document.getElementById("daily-budget").textContent = `$${Math.floor(
    (budgetAmt - savedAmt - spentAmt) / 30
  ).toLocaleString()}`;

  /* clean update transactions */
  const transactionContainer = document.querySelector(".upcoming-transactions");
  const transactionTitle = transactionContainer.querySelector("h2");

  transactionContainer.innerHTML = "";
  transactionContainer.appendChild(transactionTitle);

  /* sort by most recent */
  const sortedTransactions = [...data.transactions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  sortedTransactions.forEach((transaction) => {
    const transactionEl = document.createElement("div");
    transactionEl.className = "transaction";
    if (transaction.estimated) {
      transactionEl.classList.add("estimated");
    }

    // Determine if this is income or expense
    const isIncome = transaction.type === "income";
    const amountClass = isIncome ? "amount-received" : "amount-due";
    const amountPrefix = isIncome ? "+" : "-";

    transactionEl.innerHTML = `
            <div class="transaction-left">
                <div class="transaction-details">
                    <p class="transaction-name">${transaction.name}</p>
                    <p class="transaction-category">${
                      transaction.category || (isIncome ? "Income" : "Expense")
                    }</p>
                    <p class="transaction-date">${transaction.date}</p>
                </div>
            </div>
            <div class="transaction-amount ${amountClass}">${amountPrefix}$${transaction.amount.toFixed(
      2
    )}</div>
        `;

    transactionContainer.appendChild(transactionEl);
  });

  // Add estimation indicator if we have estimated transactions
  if (data.containsEstimations) {
    const indicator = document.createElement("div");
    indicator.className = "estimation-indicator";
    transactionContainer.appendChild(indicator);
  }
}

// Add CSS for estimated transactions
function addEstimationStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
        .amount-received {
            color: #28a745 !important;
            font-weight: bold;
        }
        
        .amount-due {
            color: #dc3545;
            font-weight: bold;
        }
    `;

  document.head.appendChild(style);
}

// Initialize dashboard on page load
document.addEventListener("DOMContentLoaded", function () {
  // Add estimation styles
  addEstimationStyles();

  // Set initial month (get from active month tab or default to current month)
  const activeMonthElement = document.querySelector(".month.active");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = activeMonthElement
    ? activeMonthElement.getAttribute("data-month")
    : monthNames[new Date().getMonth()];

  // Initialize with current month
  updateDashboard(currentMonth);

  // Add event listeners to month tabs
  document.querySelectorAll(".month").forEach((monthElement) => {
    monthElement.addEventListener("click", function () {
      // Remove active class from all months
      document.querySelectorAll(".month").forEach((el) => {
        el.classList.remove("active");
      });

      // Add active class to selected month
      this.classList.add("active");

      // Update dashboard with selected month data
      const selectedMonth = this.getAttribute("data-month");
      updateDashboard(selectedMonth);
    });
  });

});
