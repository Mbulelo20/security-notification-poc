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
export default {
  name: 'Login',
  data() {
    return {
    
    }
  },
  
}
</script>

