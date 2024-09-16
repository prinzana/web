document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    document.addEventListener('DOMContentLoaded', () => {
        const progressContainers = document.querySelectorAll('.progress-container');
    
        progressContainers.forEach(container => {
            container.addEventListener('click', () => {
                container.classList.toggle('flipped');
            });
        });
    });
});
// portfolio.js


