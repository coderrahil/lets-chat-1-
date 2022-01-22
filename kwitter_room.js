
var  firebaseConfig = {
      apiKey: "AIzaSyDR_7ESdCbOsrhEKPtd9-MWl04B1vD45sA",
      authDomain: "kwitter-app-50434.firebaseapp.com",
      projectId: "kwitter-app-50434",
      storageBucket: "kwitter-app-50434.appspot.com",
      messagingSenderId: "208833313061",
      appId: "1:208833313061:web:364ddb6e6f0cc1f6b842cc"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
