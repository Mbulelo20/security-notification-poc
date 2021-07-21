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
  firebase.initializeApp(firebaseConfig);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('firebase-messaging-sw.js')
      .then(reg => {
        console.log(`Service Worker Registration (Scope: ${reg.scope})`);
      })
      .catch(error => {
        const msg = `Service Worker Error (${error})`;
        console.error(msg);
      });
  } else {
    // happens when the app isn't served over HTTPS or if the browser doesn't support service workers
    console.warn('Service Worker not available');
  }