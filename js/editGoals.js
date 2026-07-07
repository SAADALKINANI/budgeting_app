function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  let currentGoalIndex = getQueryParameter("index");
  if (
    currentGoalIndex === null ||
    currentGoalIndex < 0 ||
    currentGoalIndex >= goals.length
  ) {
    console.log("Goal selection failure");
    window.location.href = "page3.html";
    return;
  }
  currentGoalIndex = parseInt(currentGoalIndex, 10);

  const currentGoal = goals[currentGoalIndex];
  document.getElementById("goalName").value = currentGoal.name;
  document.getElementById("goalSaved").value = currentGoal.saved;
  document.getElementById("goalTarget").value = currentGoal.target;
  document.getElementById("goalDate").value = currentGoal.goalDate || "";
});

function updateGoal() {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let totalSavedForGoals =
    JSON.parse(localStorage.getItem("totalGoalSavings")) || 0;

  /* retrieve goal index from URL */
  let currentGoalIndex = getQueryParameter("index");
  if (currentGoalIndex === null) {
    console.log("Goal selection failure");
    window.location.href = "page3.html";
    return;
  }
  currentGoalIndex = parseInt(currentGoalIndex, 10);

  const nameInput = document.getElementById("goalName");
  const savedInput = document.getElementById("goalSaved");
  const targetInput = document.getElementById("goalTarget");
  const dateInput = document.getElementById("goalDate");

  if (nameInput.value !== "" && targetInput.value !== "") {
    goals[currentGoalIndex].name = nameInput.value;

    totalSavedForGoals -= goals[currentGoalIndex].saved; // remove previous value from total saved

    goals[currentGoalIndex].saved = Number(savedInput.value);

    totalSavedForGoals += goals[currentGoalIndex].saved; // add new value to total
    localStorage.setItem(
      "totalGoalSavings",
      JSON.stringify(totalSavedForGoals)
    );

    goals[currentGoalIndex].target = Number(targetInput.value);
    goals[currentGoalIndex].goalDate = dateInput.value;

    localStorage.setItem("goals", JSON.stringify(goals));
    window.location.href = "page3.html";
  } else {
    alert("Please enter both a goal name and a target amount.");
  }
}

function cancelEdit() {
  window.location.href = "page3.html";
}
