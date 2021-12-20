let hamburger = document.querySelector('.fas.fa-bars');
let sidebar = document.querySelector('.sidebar');

// buttons
let lgLoginBtn = document.querySelector('.lg-screen.login-btn');
let mobLoginBtn = document.querySelector('.mob.login-btn');


// Mobile Bar
hamburger.addEventListener('click', ()=>{
    sidebar.classList.toggle('show');
});


// Initialize swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
