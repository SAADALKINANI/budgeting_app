// estimation.js - Separate file for all estimation-related functionality

// Currency symbols mapping
const estimationCurrencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CNY: "¥",
  };
  
  // Track estimation state
  let estimationEnabled = false;
  
  // Initialize estimation functionality
  function initEstimation() {
    // Set up event listeners for the estimation toggle
    document.getElementById("estimationOn").addEventListener("click", function () {
      // Update radio button visuals
      this.querySelector(".radio-checked").classList.add("checked");
      this.querySelector(".radio-checked").classList.remove("unchecked");
      document
        .querySelector("#estimationOff .radio-checked")
        .classList.remove("checked");
      document
        .querySelector("#estimationOff .radio-checked")
        .classList.add("unchecked");
  
      // Show estimation content
      document.getElementById("estimationContent").classList.add("visible");
      estimationEnabled = true;
      
      // Calculate and display estimation values
      calculateEstimation();
    });
  
    document.getElementById("estimationOff").addEventListener("click", function () {
      // Update radio button visuals
      this.querySelector(".radio-checked").classList.add("checked");
      this.querySelector(".radio-checked").classList.remove("unchecked");
      document
        .querySelector("#estimationOn .radio-checked")
        .classList.remove("checked");
      document
        .querySelector("#estimationOn .radio-checked")
        .classList.add("unchecked");
  
      // Hide estimation content
      document.getElementById("estimationContent").classList.remove("visible");
      estimationEnabled = false;
    });
  
    // Add event listeners to recalculate when relevant fields change
    document.getElementById("eventDate").addEventListener("change", function() {
      if (estimationEnabled) {
        calculateEstimation();
      }
    });
  
    document.getElementById("amount").addEventListener("input", function() {
      if (estimationEnabled) {
        calculateEstimation();
      }
    });
  
    // Update calculation if user manually changes savingDays or dailySavings
    document.getElementById("savingDays").addEventListener("change", function() {
      if (estimationEnabled) {
        updateDailySavingsFromDays();
      }
    });
  
    document.getElementById("dailySavings").addEventListener("change", function() {
      if (estimationEnabled) {
        updateDaysFromDailySavings();
      }
    });
  
    // Make sure number controls also trigger recalculation
    document.getElementById("dailySavings-plus").addEventListener("click", function() {
      if (estimationEnabled) {
        setTimeout(updateDaysFromDailySavings, 10);
      }
    });
  
    document.getElementById("dailySavings-minus").addEventListener("click", function() {
      if (estimationEnabled) {
        setTimeout(updateDaysFromDailySavings, 10);
      }
    });
  
    document.getElementById("savingDays-plus").addEventListener("click", function() {
      if (estimationEnabled) {
        setTimeout(updateDailySavingsFromDays, 10);
      }
    });
  
    document.getElementById("savingDays-minus").addEventListener("click", function() {
      if (estimationEnabled) {
        setTimeout(updateDailySavingsFromDays, 10);
      }
    });
  }
  
  // Calculate how many days left and daily savings amount
  function calculateEstimation() {
    // Get the event date
    const eventDateStr = document.getElementById("eventDate").value;
    const currentDate = new Date();
    const eventDate = new Date(eventDateStr);
    
    // Calculate days left
    const timeDiff = eventDate - currentDate;
    const daysLeft = Math.max(1, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
    
    // Get the expense amount
    const amount = parseFloat(document.getElementById("amount").value) || 0;
    
    // Calculate daily savings needed
    const dailySavings = amount > 0 ? (amount / daysLeft).toFixed(2) : 0;
    
    // Update the form fields
    document.getElementById("savingDays").value = daysLeft;
    document.getElementById("dailySavings").value = dailySavings;
    
    // Display results if an element exists for showing them
    const resultElement = document.getElementById("estimationResults");
    if (resultElement) {
      const currency = document.getElementById("currency-select").value;
      const symbol = estimationCurrencySymbols[currency] || "$";
      resultElement.textContent = `You need to save ${symbol}${dailySavings} per day for ${daysLeft} days.`;
    }
  }
  
  // Update daily savings amount when user changes days
  function updateDailySavingsFromDays() {
    const amount = parseFloat(document.getElementById("amount").value) || 0;
    const days = parseInt(document.getElementById("savingDays").value) || 1;
    
    // Calculate daily savings (amount ÷ days)
    const dailySavings = (amount / days).toFixed(2);
    document.getElementById("dailySavings").value = dailySavings;
  }
  
  // Update days when user changes daily savings amount
  function updateDaysFromDailySavings() {
    const amount = parseFloat(document.getElementById("amount").value) || 0;
    const dailySaving = parseFloat(document.getElementById("dailySavings").value) || 0.01;
    
    if (dailySaving > 0) {
      // Calculate days (amount ÷ daily savings)
      const days = Math.ceil(amount / dailySaving);
      document.getElementById("savingDays").value = days;
    }
  }
  
  // Function to get estimation data for saving
  function getEstimationData() {
    if (estimationEnabled) {
      return {
        estimationEnabled: true,
        dailySavings: document.getElementById("dailySavings").value,
        savingDays: document.getElementById("savingDays").value
      };
    } else {
      return {
        estimationEnabled: false
      };
    }
  }
  
  // Export functions and variables for use in other scripts
  window.estimationModule = {
    initEstimation,
    calculateEstimation,
    getEstimationData,
    estimationEnabled: () => estimationEnabled
  };
  
  // Initialize the estimation module when the DOM is loaded
  document.addEventListener("DOMContentLoaded", initEstimation);