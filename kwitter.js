// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGRcqvhkWh9Jnqpj8To7r3qColUFHke2M",
    authDomain: "let-chat-web-app-7cdbc.firebaseapp.com",
    projectId: "let-chat-web-app-7cdbc",
    storageBucket: "let-chat-web-app-7cdbc.appspot.com",
    messagingSenderId: "601196257981",
    appId: "1:601196257981:web:a58563fb7da5eb0de28dd4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html;"
}


