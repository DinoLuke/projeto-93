//LINKS FIREBASE
var firebaseConfig = { apiKey: "AIzaSyA00TLM0ZRYzDr3JTYjWImQ7b8HGp747B4", authDomain: "appconversa-50f74.firebaseapp.com", databaseURL:
"https://appconversa-50f74-default-rtdb.firebaseio.com",
projectId: "appconversa-50f74", storageBucket: "appconversa-50f74.appspot.com", messagingSenderId: "786246396111", appId: "1:786246396111:web:6af6f8931725cec7b3efba" }; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(roomName).push({
name:userName,
message:msg,
like:0
});


document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData ['name'];
like = messageData['like'];
message = messageData['message'];
nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithtag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";


row = nameWithTag + messageWithTag +like_button + spanWithtag;
document.getElementById("output").innerHTML += row;
//Fim do código
} });  }); }
function updateLike(messageId) { console.log("botão like pressionado - " + messageId);
button_id = messageId;
likes = document.getElementById(button_id).value;
updatedLikes = Number(likes) + 1;
console.log(updatedLikes);
firebase.database().ref(roomName).child(messageId).update({ like: updatedLikes }); }
function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";
}
getData();
