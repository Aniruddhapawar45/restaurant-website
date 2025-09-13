// Wait until the page is loaded, then hide the loading screen if you used one
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500); // match with CSS transition if present
    }
});

// ===== NAV TOGGLE =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// ===== MENU TAB SWITCHING =====
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab");
        if (!target) return;

        // Remove active classes
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        // Add active on current
        button.classList.add("active");
        const targetContent = document.getElementById(target);
        if (targetContent) {
            targetContent.classList.add("active");
        }
    });
});

// ===== MODAL RESERVATION =====
const reserveBtn = document.getElementById("reserveBtn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

if (reserveBtn && modal && closeModal) {
    reserveBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// ===== NAV SCROLL EFFECT =====
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (!backToTop) return;

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ===== TESTIMONIAL SLIDER =====
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial-item");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showSlide(index) {
    testimonials.forEach((t, i) => {
        t.classList.remove("active");
        if (dots[i]) dots[i].classList.remove("active");
    });

    if (testimonials[index]) {
        testimonials[index].classList.add("active");
    }
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

// initialize slider if items exist
if (testimonials.length && dots.length) {
    showSlide(currentSlide);

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
            showSlide(currentSlide);
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            currentSlide = idx;
            showSlide(currentSlide);
        });
    });
}
