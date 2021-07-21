<template>
  <div id="app">
    <input type="email" v-model="email">
    <br/>
    <input type="password" v-model="password">
    <br/>
    <button @click="register()">Register</button>
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
      register: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then( user => {
            console.log(user.user.bc)
                        this.$router.push('/home')

            }
        )
        .catch(error => {
            console.log(error)
        })
    }
  }
}
</script>

