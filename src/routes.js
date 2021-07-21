  
import login from './components/Login.vue'
import about from './components/About.vue'
import signup from './components/SignUp.vue'
import home from './components/Home.vue'
export default [
    {path: '/', component: login},
    {path: '/signup', component: signup},
    {path: '/about', component: about},
    {path: '/home', component: home}

]