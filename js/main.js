const barMenu = document.getElementById('bar-menu');
const navLinks = document.querySelector('.nav-links');

barMenu.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('active');
});