const firebaseConfig = {
  apiKey: "AIzaSyAXPOIWXPBV13yUMTcOFZBmkJM2htqfNFE",
  authDomain: "aplicativolegaldeconversa.firebaseapp.com",
  databaseURL: "https://aplicativolegaldeconversa-default-rtdb.firebaseio.com",
  projectId: "aplicativolegaldeconversa",
  storageBucket: "aplicativolegaldeconversa.appspot.com",
  messagingSenderId: "111768436797",
  appId: "1:111768436797:web:bb10ebcd730bda67002a54"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });


localStorage.setItem("roomName", roomName);
  
window.location = "KwitterPage.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; roomNames = childKey; console.log("Nome da Sala - " + roomNames); row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";
}
