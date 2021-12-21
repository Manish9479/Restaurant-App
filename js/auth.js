let hamburger = document.querySelector('.fas.fa-bars');
let sidebar = document.querySelector('.sidebar');

// Mobile Bar
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});