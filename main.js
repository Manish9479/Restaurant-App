let hamburger = document.querySelector('.fas.fa-bars');
let sidebar = document.querySelector('.sidebar');

let login = document.querySelector('.auth_login');
let loginForm = document.querySelector('.auth_login');

// overlay
const overlay = document.getElementById('overlay')

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
    overlay.classList.add('active')
})

mobLoginBtn.addEventListener('click', ()=>{
    loginForm.classList.add('show');
    sidebar.classList.remove('show');
})

cancelIcon.addEventListener('click', ()=>{
    loginForm.classList.remove('show');
    overlay.classList.remove('active')   
})

// overlay
overlay.addEventListener('click',()=>{
  overlay.classList.remove('active')
  loginForm.classList.remove('show')
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
