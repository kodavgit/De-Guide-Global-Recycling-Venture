// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});



// Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.querySelector(".form-success").textContent =
        "Thank you! Our team will contact you shortly.";
    this.reset();
});