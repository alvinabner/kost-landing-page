const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 240) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('top-10');
        navbar.classList.add('top-0'); 
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('top-10'); 
        navbar.classList.remove('top-0'); 
    }  
});


const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('hidden');
});