importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

var firebaseConfig = {
  apiKey: "AIzaSyAjKWq042BWp5b5yA5p9Awwd7AJw-xfa5U",
  authDomain: "security-notification-poc.firebaseapp.com",
  projectId: "security-notification-poc",
  storageBucket: "security-notification-poc.appspot.com",
  messagingSenderId: "582459127401",
  appId: "1:582459127401:web:f700611c49380db663d4f8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

app.messaging().getToken({ vapidKey: 'BGw2s5OIy6mkqhFMOQ0h3b86lxnyAdTRWgBkuhp0vWkceTT15hVaGAh8-qcIq1FvKBQOUC13f5sbT_mJYmBIfqc' })
