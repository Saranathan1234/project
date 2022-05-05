//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDa5_axWzEGBLWuge8MTxcIxUVUUUoDfrQ",
    authDomain: "kwitter-5237b.firebaseapp.com",
    databaseURL: "https://kwitter-5237b-default-rtdb.firebaseio.com",
    projectId: "kwitter-5237b",
    storageBucket: "kwitter-5237b.appspot.com",
    messagingSenderId: "341530983534",
    appId: "1:341530983534:web:25e7b744cf76516c947a7f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "project.html"
}