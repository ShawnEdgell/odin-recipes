document.getElementById('darkModeToggle').addEventListener('click', function() {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme);

    // Optionally, save the selected theme to local storage for returning users
    localStorage.setItem('theme', targetTheme);
});

// Load saved theme from local storage, if available
let savedTheme = localStorage.getItem('theme') || "light";
document.documentElement.setAttribute('data-theme', savedTheme);