document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-top, .reveal-bottom");

    const revealOnScroll = () => {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load in case elements are already in view
});