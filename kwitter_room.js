const firebaseConfig = {
    apiKey: "AIzaSyANhsKBKTD1FmcN6xySCO6RB9lvXTJcOGY",
    authDomain: "letscaht-194a7.firebaseapp.com",
    databaseURL: "https://letscaht-194a7-default-rtdb.firebaseio.com",
    projectId: "letscaht-194a7",
    storageBucket: "letscaht-194a7.appspot.com",
    messagingSenderId: "881321498707",
    appId: "1:881321498707:web:a13af7912c82afa42a4ea6"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome " + user_name +" !"
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   row="<div class='room_name' id=" + Room_names + " onclick='redirect_to_room(this.id)'> #"+ Room_names+"</div><hr>"

   document.getElementById("output").innerHTML = row

  
});});}

function addroom(){
    room_name=document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding a room"
    })

    localStorage.setItem("room_name", room_name) 
    window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row="<div class='room_name' id=" + Room_names + " onclick='redirect_to_room(this.id)'> #"+ Room_names+"</div><hr>"

   document.getElementById("output").innerHTML = row

   //End code
});});}

getData();

function redirect_to_room(name){
    localStorage.setItem("room_name", name)
    window.location="kwitter_page.html"
}

function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html"
}