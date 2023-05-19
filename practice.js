
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDxKLMvYyX-QFRWZXcORHimrZ_4a0gRKek",
  authDomain: "claseprueba-c7c3f.firebaseapp.com",
  projectId: "claseprueba-c7c3f",
  storageBucket: "claseprueba-c7c3f.appspot.com",
  messagingSenderId: "728495527365",
  appId: "1:728495527365:web:62b5add23f9b6078ffa7ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


