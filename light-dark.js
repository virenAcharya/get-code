// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Show the loader and hide the main content initially
    const loader = document.getElementById("lo");
    const mainContent = document.getElementById("main-content");

    if (loader) {
        loader.style.display = "flex"; // Show loader
    }
    if (mainContent) {
        mainContent.style.display = "none"; // Hide main content
    }

    // Retrieve the saved theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme + "-theme");

    // Initialize the theme toggle switch based on the saved theme
    const themeSwitch = document.querySelector(".theme-switch__checkbox");
    if (themeSwitch) {
        themeSwitch.checked = savedTheme === "dark";

        // Add an event listener to toggle theme and save the user's choice
        themeSwitch.addEventListener("change", () => {
            const newTheme = themeSwitch.checked ? "dark" : "light";
            document.body.className = newTheme + "-theme";
            localStorage.setItem("theme", newTheme);
        });
    }
});

// Function to toggle between light and dark themes (if needed externally)
function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.className = newTheme + "-theme";
    localStorage.setItem("theme", newTheme);

    const themeSwitch = document.querySelector(".theme-switch__checkbox");
    if (themeSwitch) themeSwitch.checked = newTheme === "dark";
}


