import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase';

Vue.config.productionTip = false
Vue.use(VueRouter)

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

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')
