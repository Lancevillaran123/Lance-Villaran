// Show welcome page initially
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcome-page').style.display = 'flex';
    document.getElementById('main-interface').style.display = 'none';
});

// Switch to main interface
function showMainInterface() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('main-interface').style.display = 'block';
    showTab('home');
}

// Show specific tab
function showTab(tabId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(tabId).classList.add('active');
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.nav-item[onclick="showTab('${tabId}')"]`).classList.add('active');
    
    // Close mobile menu if open
    document.querySelector('.nav-menu').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Toggle game descriptions
function toggleGameDescription(gameId) {
    const desc = document.getElementById(`${gameId}-desc`);
    if (desc) {
        desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}

// Make navigation sticky on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.netflix-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    
    if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
