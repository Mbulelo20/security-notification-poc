import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
import firebaseMessaging from './firebase'

Vue.prototype.$messaging = firebaseMessaging
new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')
