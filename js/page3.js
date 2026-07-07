// let goals = JSON.parse(localStorage.getItem("goals")) || [{ name: "NBA Playoff Game", target: 1000, saved: 680 },
// { name: "Cancun Vacation", target: 3500, saved: 300 }];

function displayGoals() {
  let goals = JSON.parse(localStorage.getItem("goals"));
  let totalSavedForGoals =
    JSON.parse(localStorage.getItem("totalGoalSavings")) || 0;

  const container = document.querySelector("#goals");
  container.innerHTML = "";

  // progress bar for each goal in goals array
  for (let i = 0; i < goals.length; i++) {
    let goal = goals[i];
    let percent = Math.floor((goal.saved / goal.target) * 100);

    let formattedDate = "";

    if (goal.goalDate) {
      const parts = goal.goalDate.split("-");
      const localDate = new Date(parts[0], parts[1] - 1, parts[2]);
      formattedDate = localDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }

    let goalHTML = `
        <div class="goal" onclick="redirectToEditGoal(${i})">
        <button class="remove-btn" onclick="event.stopPropagation(); removeGoal(${i})">X</button>
        <div class="label">${goal.name}</div>
        <div class="bar">
            <div class="filling" style="width: ${percent}%;">${percent}%</div>
        </div>
        <div id = "saved">Saved: $${goal.saved} / $${goal.target}</div>
        <div class="goal-date">${formattedDate}</div>
        </div>`;

    container.innerHTML += goalHTML;

    console.log(totalSavedForGoals);
  }
}

function addGoal() {
  const nameInput = document.querySelector("#goalName");
  const targetInput = document.querySelector("#goalTarget");
  const savedInput = document.querySelector("#goalSaved");
  const dateInput = document.querySelector("#goalDate");

  if (
    nameInput.value !== "" &&
    targetInput.value !== "" &&
    dateInput.value !== ""
  ) {
    let goals = JSON.parse(localStorage.getItem("goals")) || [];
    let totalSavedForGoals =
      JSON.parse(localStorage.getItem("totalGoalSavings")) || 0;

    const newGoal = {
      name: nameInput.value,
      target: Number(targetInput.value),
      saved: Number(savedInput.value),
      goalDate: dateInput.value,
    };

    goals.push(newGoal);
    localStorage.setItem("goals", JSON.stringify(goals));

    totalSavedForGoals += newGoal.saved;
    localStorage.setItem(
      "totalGoalSavings",
      JSON.stringify(totalSavedForGoals)
    );

    console.log(
      "Goal saved: " +
        nameInput.value +
        " with a target of $" +
        targetInput.value
    );

    nameInput.value = "";
    targetInput.value = "";
    dateInput.value = "";
    savedInput.value = "";

    window.location.href = "page3.html";
  } else {
    alert("Please enter both a goal name, target amount, and goal date.");
  }
}

function removeGoal(index) {
  let goals = JSON.parse(localStorage.getItem("goals"));
  let totalSavedForGoals =
    JSON.parse(localStorage.getItem("totalGoalSavings")) || 0;

  totalSavedForGoals -= goals[index].saved; // remove from total saved
  localStorage.setItem("totalGoalSavings", JSON.stringify(totalSavedForGoals));

  goals.splice(index, 1); // removes the goal at the parameter index from goals

  localStorage.setItem("goals", JSON.stringify(goals)); // update
  displayGoals();
}

document.addEventListener("DOMContentLoaded", function () {
  displayGoals();
});

document.getElementById("add-goals-btn").addEventListener("click", function () {
  window.location.href = "addGoals.html";
});

function redirectToEditGoal(index) {
  window.location.href = `editGoals.html?index=${index}`;
}
