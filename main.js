let hamburger = document.querySelector('.fas.fa-bars');
let sidebar = document.querySelector('.sidebar');

let login = document.querySelector('.auth_login');
let loginForm = document.querySelector('.auth_login');


// buttons
let lgLoginBtn = document.querySelector('.lg-screen.login-btn');
let mobLoginBtn = document.querySelector('.mob.login-btn');

let cancelIcon = document.querySelector('.fas.login_form');


// Mobile Bar

hamburger.addEventListener('click', ()=>{
    sidebar.classList.toggle('show');
});


//  Login Form

lgLoginBtn.addEventListener('click',()=>{
    loginForm.classList.add('show');
})

mobLoginBtn.addEventListener('click', ()=>{
    loginForm.classList.add('show');
    sidebar.classList.remove('show');
})

cancelIcon.addEventListener('click', ()=>{
    loginForm.classList.remove('show');    
})


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
