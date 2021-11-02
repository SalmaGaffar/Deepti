var firebaseConfig = {
  apiKey: "AIzaSyDzcvd4iVF0omX6mJey2js_JQjWsRlA5r0",
  authDomain: "kwitter-a15c7.firebaseapp.com",
  databaseURL: "https://kwitter-a15c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-a15c7",
  storageBucket: "kwitter-a15c7.appspot.com",
  messagingSenderId: "313769088872",
  appId: "1:313769088872:web:b7fea883a38b10589968dd",
  measurementId: "G-Q0K725TLKR"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name "
  }); 

  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
       Room_names = childKey;
      
       console.log("Room Name -"+Room_Names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });

}
    
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location ="kwitter_page.html";
}
