import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAjKWq042BWp5b5yA5p9Awwd7AJw-xfa5U",
  authDomain: "security-notification-poc.firebaseapp.com",
  projectId: "security-notification-poc",
  storageBucket: "security-notification-poc.appspot.com",
  messagingSenderId: "582459127401",
  appId: "1:582459127401:web:f700611c49380db663d4f8"
};
firebase.initializeApp(config);

Vue.prototype.$messaging = firebase.messaging()

navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then((registration) => {
    Vue.prototype.$messaging.useServiceWorker(registration)
  }).catch(err => {
    console.log(err)
  })
Vue.config.productionTip = false
Vue.use(VueRouter)



const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')
