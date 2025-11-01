// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const projectGrid = document.querySelector('.project-grid');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Sample project data
const projects = [
    {
        title: 'Project 1',
        description: 'A responsive web application built with HTML, CSS, and JavaScript.',
        imageUrl: 'images/project1.jpg',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'An interactive dashboard with dynamic data visualization.',
        imageUrl: 'images/project2.jpg',
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'A mobile-first e-commerce website with shopping cart functionality.',
        imageUrl: 'images/project3.jpg',
        link: '#'
    }
];

// Create and load project cards
function loadProjects() {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        projectGrid.appendChild(card);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to elements when they come into view
document.querySelectorAll('.project-card, section h2').forEach(el => {
    observer.observe(el);
});

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', loadProjects);

// Form validation for contact form (if present)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If validation passes, you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}