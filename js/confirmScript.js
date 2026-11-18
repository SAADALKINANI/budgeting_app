document.addEventListener('DOMContentLoaded', function() {
    
    const expense = JSON.parse(localStorage.getItem('currentExpense') || '{}');
    
    if (!expense.eventName) {
        window.location.href = 'addExp.html';
        return;
    }
    
    // Currency symbols mapping
    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
        'JPY': '¥',
        'CNY': '¥'
    };
    
    // Day names mapping
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Format date
    function formatDate(dateString) {
        const parts = dateString.split('-');
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
        const day = parseInt(parts[2], 10);
        const date = new Date(year, month, day);
        
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
    
    // Create receipt HTML
    const receiptContent = document.getElementById('receipt-content');
    
    // Basic expense info
    let receiptHTML = `
        <div class="receipt-item">
            <div class="receipt-label">Event Name</div>
            <div class="receipt-value">${expense.eventName}</div>
        </div>

        <div class="receipt-item">
            <div class="receipt-label">Amount</div>
            <div class="receipt-value">${currencySymbols[expense.currency] || '$'}${expense.amount}</div>
        </div>
        <div class="receipt-item">
            <div class="receipt-label">Date</div>
            <div class="receipt-value">${formatDate(expense.eventDate)}</div>
        </div>
    `;
    
    // Repeat information
    if (expense.repeatOption && expense.repeatOption !== 'none') {
        receiptHTML += `
            <div class="receipt-item">
                <div class="receipt-label">Repeat</div>
                <div class="receipt-value">
        `;
        
        if (expense.repeatOption === 'custom' && expense.customRepeat) {
            const frequencyCount = expense.customRepeat.frequencyCount;
            const frequencyType = expense.customRepeat.frequencyType;
            
            receiptHTML += `
                <div class="repeat-info">
                    Every ${frequencyCount} ${frequencyType}
            `;
            
            if (expense.customRepeat.selectedDays && expense.customRepeat.selectedDays.length > 0) {
                receiptHTML += `<div class="custom-days">On: `;
                
                expense.customRepeat.selectedDays.forEach(dayIndex => {
                    receiptHTML += `<span class="day-badge">${dayNames[dayIndex]}</span>`;
                });
                
                receiptHTML += `</div>`;
            }
            
            receiptHTML += `</div>`;
        } else {
            // Standard repeat option
            receiptHTML += `${expense.repeatOption.charAt(0).toUpperCase() + expense.repeatOption.slice(1)}`;
        }
        
        receiptHTML += `
                </div>
            </div>
        `;
    }
    
    // Estimation information if enabled
    if (expense.estimationEnabled) {
        receiptHTML += `
            <div class="estimation-section">
                <div class="receipt-item">
                    <div class="receipt-label">Estimated Daily Savings</div>
                    <div class="receipt-value">${currencySymbols[expense.currency] || '$'}${expense.dailySavings}</div>
                </div>
                <div class="receipt-item">
                    <div class="receipt-label">Estimated Saving Days</div>
                    <div class="receipt-value">${expense.savingDays} days</div>
                </div>
                <div class="receipt-item">
                    <div class="receipt-label">Total Estimated Savings</div>
                    <div class="receipt-value">${currencySymbols[expense.currency] || '$'}${(expense.dailySavings * expense.savingDays).toFixed(2)}</div>
                </div>
            </div>
        `;
    }
    
    if (expense.type == 'expense')
    {
        receiptHTML += `
        <div class="receipt-highlight">
            Your expense has been successfully saved!
        </div>
    `;
    }
    else {
        receiptHTML += `
        <div class="receipt-highlight">
            Your income has been successfully saved!
        </div>
    `;
    }
    
    receiptContent.innerHTML = receiptHTML;
    
    const timestamp = new Date().toLocaleString();
    document.getElementById('timestamp').textContent = `Created on: ${timestamp}`;
    
    document.getElementById('editButton').addEventListener('click', function() {
        console.log("Edit button clicked - redirecting to addExpense.html");
        if (expense.type == 'income')
        {
            window.location.href = 'addInc.html';
        }

        else {
            window.location.href = 'addExp.html';
        }
        
    });
    
    document.getElementById('continueButton').addEventListener('click', function() {
        console.log("Continue button clicked - redirecting to page2.html");
        window.location.href = 'page2.html';
    });
});