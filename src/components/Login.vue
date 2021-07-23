<template>
  <div id="form">
    <div class="form" style="margin-top: 12em">
      <h2>Login</h2>
      <h6 style="color: red">{{err}}</h6>
      <input type="text" v-model="email" placeholder="Email" style="width:330px; margin: auto"/>
      <br/>
      <input type="password" v-model="password" v-on:keyup.enter="signUp()" placeholder="Password" style="width:330px"/>
      <br/><button v-on:click="login()">Login</button>
      <router-link to="/signup">
        <h6>Or sign up</h6>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data() {
    return {
    email: '',
    password: '',
    err: ''
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
          this.err = error.message
      })
    }
  }
  
}
</script>

<style>
html, body{
	width:100%;
	height:100%;
	margin:0px;
	font-family: 'Work Sans', sans-serif;
}

section{
	background-color: rgba(0, 0, 0, 0.72);
	width:25%;
	min-height:25%;
	display:flex;
	flex-direction:column;
	/*margin-left:auto;
	margin-right:auto;*/
}
form{
	display:flex;
	padding: 15px; 
}
error{
  color: #711f1b;
}
h2{
	font-family: 'Archivo Black', sans-serif;
	color:#e0dada;
	margin-left:auto;
	margin-right:auto;
}
.info.good{
	border:1px solid #416d50;
	background-color: #47cf73;
	color:#416d50;
}
input{
	height:35px;
	padding: 5px 5px;
	margin: 10px 0px;
	background-color:#e0dada;
	border:none;
}
button{
	height:40px;
	padding: 5px 5px;
	margin: 10px 0px;
	font-weight:bold;
	background-color:#be5256;
	border:none;
	color:#e0dada;
	cursor:pointer;
	font-size:16px;
}
button:hover{
	background-color:#711f1b;
}
@-webkit-keyframes shake{
	from, to{
		-webkit-transform: translate3d(0, 0, 0);
		transform:translate3d(0,0,0);
	}
	10%,30%,50%,70%,90%{
		-webkit-transform: translate3d(-10px, 0, 0);
		transform:translate3d(-10px,0,0);
	}
	20%,40%,60%,80%{
		-webkit-transform: translate3d(10px, 0, 0);
		transform:translate(10px,0,0);
	}
}
.shake{
	animation-name: shake;
	animation-duration:1s;
	/*animation-fill-mode: both;*/
}
@media screen and (max-width: 780px) {
	section{
		width:90%;
	}
}
</style>