<template>
  <div id="app">
    <input type="email" v-model="email">
    <br/>
    <input type="password" v-model="password">
    <br/>
    <button @click="login()">Login</button>
    <router-link to="/signup"></router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
    email: '',
    password: ''
    }
  },
  methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then( user => {
            console.log(user.user.bc)
            this.$router.push('/home')
        })
        .catch(error => {
            console.log(error)
        })
    }
  },
  created: {
    msg: function() {firebase.msg()
    .then(() => {console.log("Permission Granted")}) 
    .catch(() => {console.log("Error Occured")})
    }}
}
</script>

