/////////////////////////////////////////// TaskBar Logic ////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".taskbar button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const page = this.getAttribute("data-page");
      const basePath = window.location.pathname.includes("/pages/")
        ? "../"
        : "";
      window.location.href = `${basePath}pages/${page}.html`;
    });
  });

  // Highlight the active button
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");
  buttons.forEach((button) => {
    const page = button.getAttribute("data-page");
    if (page === currentPage) {
      button.classList.add("active"); // Add the 'active' class to the current page's button
    } else {
      button.classList.remove("active"); // Remove 'active' class from other buttons
    }
  });
});
/////////////////////////////////////////// TaskBar Logic ////////////////////////////////////////////
