// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIf5qdY-K1ZoCnHMIXzgyOAh_IcqD_eOM",
    authDomain: "usersauth-c84b4.firebaseapp.com",
    projectId: "usersauth-c84b4",
    storageBucket: "usersauth-c84b4.appspot.com",
    messagingSenderId: "617422749398",
    appId: "1:617422749398:web:dfb793ba2b0f2259675377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export { auth, createUserWithEmailAndPassword };