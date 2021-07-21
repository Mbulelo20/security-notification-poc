import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

var firebaseConfig = {
    apiKey: "AIzaSyAjKWq042BWp5b5yA5p9Awwd7AJw-xfa5U",
    authDomain: "security-notification-poc.firebaseapp.com",
    projectId: "security-notification-poc",
    storageBucket: "security-notification-poc.appspot.com",
    messagingSenderId: "582459127401",
    appId: "1:582459127401:web:f700611c49380db663d4f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.messaging()