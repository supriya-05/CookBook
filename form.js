import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCGssWsaZHeVbJiO0Lx4c7ohLQbCAr4Qj4",
    authDomain: "cookbook-2f48a.firebaseapp.com",
    projectId: "cookbook-2f48a",
    storageBucket: "cookbook-2f48a.appspot.com",
    messagingSenderId: "65140933193",
    appId: "1:65140933193:web:a99b02aca363d7cb127598"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

  document.getElementById("reg-btn").addEventListener('click', function(){
   document.getElementById("register-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

 document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("register-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});

document.getElementById("login-btn").addEventListener('click', function(){
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    if(document.getElementById("result")){
      window.location.assign('finalhome2.html');
      alert("login successful");
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML = "Invalid email or password";
  });
});
  document.getElementById("register-btn").addEventListener('click', function(){
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      document.getElementById("result").style.display="inline";
      document.getElementById("register-div").style.display="none";
      if(document.getElementById("result")){
        window.location.assign('form.html');
        alert("registration successful! please login in");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML = "Invalid email or password";
    });
  });
