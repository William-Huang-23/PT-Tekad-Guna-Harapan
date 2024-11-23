/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const toggleIcon = document.getElementById('toggle-icon');

// Menu Toggle
navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');

        toggleIcon.classList.remove('ri-close-large-fill')

        document.body.classList.remove('show-menu');
    } else {
        navMenu.classList.add('show-menu');

        toggleIcon.classList.add('ri-close-large-fill')

        document.body.classList.add('show-menu');
    }
    
});

// Hide Menu
const navbarLink = document.querySelectorAll('[id=navbar-link]');

for (i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener('click', () => {
        navMenu.classList.remove('show-menu');

        toggleIcon.classList.remove('ri-close-large-fill')

        document.body.classList.remove('show-menu');
    });
}