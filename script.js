// Typing effect for the hero section with cursor animation
const typingText = "Aspiring Software Engineer with a passion for data structures, algorithms, and project-based learning.";
let index = 0;
const typingElement = document.querySelector('.typing');

function type() {
    if (index < typingText.length) {
        typingElement.textContent += typingText[index];
        index++;
        setTimeout(type, 120);  // Slightly slower typing speed for better effect
    }
}

window.onload = type;  // Start typing when the page loads

// Fade-in on scroll with animation triggering
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Scroll to Top button functionality
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
