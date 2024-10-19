document.addEventListener('DOMContentLoaded', function () {
    // Toggle the mobile navigation menu
    const navTrigger = document.querySelector(".navTrigger");
    navTrigger.addEventListener("click", function () {
        const nav = document.querySelector(".nav");
        nav.classList.toggle("active");
    });

    // Smooth scroll to sections
    const links = document.querySelectorAll(".navlinks a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Interactive Year Widget
    const yearWidgets = document.querySelectorAll(".year-widget");
    yearWidgets.forEach(widget => {
        widget.addEventListener("click", function () {
            alert("You clicked on " + this.textContent);
            // You can add more logic to dynamically load content here
        });
    });
});

