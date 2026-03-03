document.addEventListener("DOMContentLoaded", function() {

    const reveals = document.querySelectorAll(".reveal");

    // First hide them safely AFTER DOM loads
    reveals.forEach(el => {
        el.classList.add("hidden");
    });

    function revealOnScroll() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const visiblePoint = 120;

            if (elementTop < windowHeight - visiblePoint) {
                element.classList.add("active");
                element.classList.remove("hidden");
            }
        });
    }

    // Run once on load
    revealOnScroll();

    // Run on scroll
    window.addEventListener("scroll", revealOnScroll);

});