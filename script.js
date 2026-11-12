// =================================
// PORTFOLIO JAVASCRIPT
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // 1. HAMBURGER MENU
    // =================================

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close menu after clicking a navigation link

    document.querySelectorAll("#navMenu a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        });

    });


    // Close menu when clicking outside

    document.addEventListener("click", function (event) {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        }

    });


    // Close menu using Escape key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        }

    });


    // =================================
    // 2. LIGHT / DARK THEME
    // =================================

    const themeToggle = document.getElementById("themeToggle");

    let currentTheme = localStorage.getItem("portfolioTheme") || "dark";


    function applyTheme() {

        document.body.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {

            themeToggle.textContent = "☀ Light";

        } else {

            themeToggle.textContent = "☾ Dark";

        }

    }


    // Apply saved theme when page loads

    applyTheme();


    // Change theme on button click

    themeToggle.addEventListener("click", function () {

        currentTheme = currentTheme === "dark" ? "light" : "dark";

        localStorage.setItem("portfolioTheme", currentTheme);

        applyTheme();

    });


    // =================================
    // 3. SCROLL REVEAL ANIMATION
    // =================================

    const fadeElements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.10
        }

    );


    fadeElements.forEach(function (element) {

        observer.observe(element);

    });


    // =================================
    // 4. CONTACT ME BUTTON
    // =================================

    const contactBtn = document.getElementById("contactBtn");

    const contactSection = document.getElementById("contact");


    if (contactBtn && contactSection) {

        contactBtn.addEventListener("click", function () {

            contactSection.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    }

});