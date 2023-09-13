//LINKS FIREBASE
const firebaseConfig = {
apiKey: "AIzaSyAXPOIWXPBV13yUMTcOFZBmkJM2htqfNFE",
authDomain: "aplicativolegaldeconversa.firebaseapp.com",
projectId: "aplicativolegaldeconversa",
storageBucket: "aplicativolegaldeconversa.appspot.com",
messagingSenderId: "111768436797",
appId: "1:111768436797:web:bb10ebcd730bda67002a54"
};

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
message = messsageData['message'];
nameWitTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
likeButtton = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
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