  
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  created() {
    var config = {
    apiKey: "AIzaSyAjKWq042BWp5b5yA5p9Awwd7AJw-xfa5U",
    authDomain: "security-notification-poc.firebaseapp.com",
    projectId: "security-notification-poc",
    storageBucket: "security-notification-poc.appspot.com",
    messagingSenderId: "582459127401",
    appId: "1:582459127401:web:f700611c49380db663d4f8"
    };
    firebase.initializeApp(config);
    const messaging = firebase.messaging();
    messaging
    .requestPermission()
    .then(() => firebase.messaging().getToken())
    .then((token) => {
        console.log(token) // Receiver Token to use in the notification
    })
    .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
    });
    messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
    // ...
    });
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>