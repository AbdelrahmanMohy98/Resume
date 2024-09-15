document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll for Navigation Links
    const links = document.querySelectorAll("nav ul li a");
    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const targetElement = document.querySelector(href);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth"
        });
    }

    // Dark/Light Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        body.classList.add("dark-theme");
    }

    themeToggleBtn.addEventListener("click", function() {
        body.classList.toggle("dark-theme");

        // Save the theme preference in localStorage
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
