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
      room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}