
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAuth,createUserWithEmailAndpassword, } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCrueC5ZyxvYwTd821Jh2FjZgymb_F8EPQ",
//   authDomain: "signup-61bb8.firebaseapp.com",
//   projectId: "signup-61bb8",
//   storageBucket: "signup-61bb8.appspot.com",
//   messagingSenderId: "1063608895434",
//   appId: "1:1063608895434:web:42bb4bf9bade6326623133"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// var firstname = document.getElementById("firstname")
// var lastname = document.getElementById("lastname")
// var email = document.getElementById("Email")
// var passwords = document.getElementById("password")



// window.signup = function(e){
//   e.preventDefault();
//   var obj = {
//       firstname:firstname.value,
//       lastname:lastname.value,
//       email:email.value,
//       passwords:passwords.value,
//   }
//   createUserWithEmailAndpassword(auth,obj.email,obj.passwords)
//   .then(function(success){
//       alert("signup successfully")
//   })
//   .catch(function(err){
//       alert("error"  + err)
//   })
//   console.log(obj)
// }



  // nnnnnnnnnnnnnnnnnnnnnnnnnnnnnwwwwwwwwwwwwwwwwwwwwwwwwwwww

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCrueC5ZyxvYwTd821Jh2FjZgymb_F8EPQ",
//   authDomain: "signup-61bb8.firebaseapp.com",
//   projectId: "signup-61bb8",
//   storageBucket: "signup-61bb8.appspot.com",
//   messagingSenderId: "1063608895434",
//   appId: "1:1063608895434:web:42bb4bf9bade6326623133"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


//  document.getElementById("btn").addEventListener('click',()=>{
//   alert("HELLO")
//   const auth = getAuth();
//   var email = document.getElementById("Email").value;
//   var password = document.getElementById("password").value;
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       window.location.href = "./login.html"
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// })

// document.getElementById("btn").addEventListener('click',()=>{
//   var email = document.getElementById("Email").value;
//   console.log(email);
//     var password = document.getElementById("password").value;
//     console.log(password);
// })
