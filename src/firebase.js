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
firebase.initializeApp(firebaseConfig)
firebase.messaging()
    .requestPermission()
    .then(() => firebase.messaging().getToken())
    .then((token) => {
        console.log(token, " - TOKEN") // Receiver Token to use in the notification
    })
    .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
    });
    // messaging.onMessage(function(payload) {
    // console.log("Message received. ", payload);
    // // ...
    // });
    export default firebase.messaging()