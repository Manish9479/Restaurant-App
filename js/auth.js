import { auth, createUserWithEmailAndPassword } from "./firebaseAuth.js";

const hamburger = document.querySelector('.fas.fa-bars');
const sidebar = document.querySelector('.sidebar');

// Mobile Bar
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});



// sign up
const signUpBtn = document.querySelector('.signup__btn');
const emailFiled = document.getElementById('email');
const passwordField = document.getElementById('passwd');


// email error message
function emailError(){
    const span = document.createElement('span');
    span.setAttribute('id','email-err');
    const text = document.createTextNode('*Email Required');
    span.appendChild(text);
    emailFiled.insertAdjacentElement("afterend",span);
}

// password error message
function passwordError(){
    const span = document.createElement('span');
    span.setAttribute('id', 'passwd-err');
    const text = document.createTextNode('*password Required');
    span.appendChild(text);
    passwordField.insertAdjacentElement("afterend", span); 
}

signUpBtn.addEventListener('click',()=>{
    
    const email = emailFiled.value;
    const password = passwordField.value;
        
    
    // email error check
    if(email === null || email === ''){
        if (emailFiled.nextElementSibling === null) emailError();;
    }
    else if( email != null || email != ''){
        if (emailFiled.nextElementSibling != null) emailFiled.nextElementSibling.remove();;   
    }


    // password error check
    if(password === null || password === ''){
        if (passwordField.nextElementSibling === null) passwordError();
    }
    else if(password != null || password != ''){
        if(passwordField.nextElementSibling != null) passwordField.nextElementSibling.remove();
    }



    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });
})