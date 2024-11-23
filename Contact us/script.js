 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.className = "scroll-to-top";
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.style.display = "none"; // Hidden by default
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission handling
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Display a success message (You can replace this with an actual API call)
    alert(`Thank you, ${data.name}! We have received your message.`);
    this.reset(); // Reset the form after submission
});

// Newsletter subscription handling
document.querySelector('.social-media .newsletter button').addEventListener('click', function () {
    const emailInput = document.querySelector('.social-media .newsletter input');
    if (emailInput.value) {
        alert(`Thank you for subscribing with ${emailInput.value}!`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Dynamic effects for hover animations (optional enhancement)
document.querySelectorAll('.option, .feature').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.03)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
