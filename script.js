// ================= PRELOADER =================
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 800);
});



// Mobile Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});






// ================= PREMIUM FAQ SYSTEM =================

const faqItems = document.querySelectorAll(".faq-item");
const faqSearch = document.getElementById("faqSearch");
const faqVisibleCount = document.getElementById("faqVisibleCount");

/* -------- AUTO CLOSE + SMOOTH SLIDE -------- */
faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
                const otherAnswer = otherItem.querySelector(".faq-answer");
                otherAnswer.style.height = 0;
            }
        });

        // Toggle current item
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.height = answer.scrollHeight + "px";
        } else {
            answer.style.height = 0;
        }
    });
});


/* -------- FAQ SEARCH FUNCTION -------- */
faqSearch.addEventListener("keyup", function () {
    const searchValue = this.value.toLowerCase();
    let visibleCount = 0;

    faqItems.forEach(item => {
        const questionText = item.querySelector("h3").innerText.toLowerCase();

        if (questionText.includes(searchValue)) {
            item.style.display = "block";
            visibleCount++;
        } else {
            item.style.display = "none";
        }
    });

    faqVisibleCount.textContent = visibleCount;
});





// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");
const counterSection = document.querySelector("#counter");

function startCounting() {
    counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const increment = target / 200;

        function updateCounter() {
            const current = +counter.innerText;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString();
            }
        }

        updateCounter();
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();

            document.querySelectorAll(".counter-box").forEach(box => {
                box.classList.add("active");
            });

            observer.unobserve(counterSection);
        }
    });
}, { threshold: 0.4 });

observer.observe(counterSection);








// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});