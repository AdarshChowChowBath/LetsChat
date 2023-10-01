
var firebaseConfig = {
  apiKey: "AIzaSyARAv_asvWLZwqpTWctH0Zl2t2f5tx5DmA",
  authDomain: "twitter-82e93.firebaseapp.com",
  databaseURL: "https://twitter-82e93-default-rtdb.firebaseio.com",
  projectId: "twitter-82e93",
  storageBucket: "twitter-82e93.appspot.com",
  messagingSenderId: "840590349065",
  appId: "1:840590349065:web:280797666a403568f279d8"
    };
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " welcome " + user_name + " !"

function addRoom() 
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name - " + Room_names);
       row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

