<template>
  <div id="app">
    <input type="email" v-model="email">
    <br/>
    <input type="password" v-model="password">
    <br/>
    <button type="submit">Login</button>
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
            console.log(user.data)
            }
        )
        .catch(error => {
            console.log(error)
        })
    }
  }
}
</script>

