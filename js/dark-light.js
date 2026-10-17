
// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("themeToggle");

// Saved theme check
const savedTheme = localStorage.getItem("theme");

// যদি আগে theme save করা থাকে
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  // Default Dark Mode
  document.documentElement.setAttribute("data-theme", "dark");
}


// Toggle button
if (themeToggle) {
  themeToggle.addEventListener("click", () => {

    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";

    // Theme change
    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    // Save theme
    localStorage.setItem("theme", newTheme);

  });
}