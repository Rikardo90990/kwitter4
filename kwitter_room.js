
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Te damos la bienvenida " + user_name
function getData()
 {firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
console.log("nombre de la sala " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      });});}

getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"agregando nombre de la sala"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}