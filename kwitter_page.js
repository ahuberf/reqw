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
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name")
 room_name=localStorage.getItem("room_name")

    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag +like_button + span_with_tag;       
    document.getElementById("output").innerHTML += row;
    function send(){
        msg= document.getElementById("msg").value
        firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         likes:0
        })
    }
    function logout(){
        localStorage.removeItem("user_name")
        localStorage.removeItem("room_name")
        window.location="index.html"
    }