<template>
  <div id="form">
    <form>
  <h2>Login</h2>
  
  <input type="text" v-model="email" placeholder="Email" style="width:330px; margin: auto"/>
  <p v-if="emailFormatValid == false">error</p>
  <input type="password" v-model="password" v-on:keyup.enter="login()" placeholder="Password" />
  <button v-on:click="login()">Log in</button>
  <router-link to="/signup">Or signup</router-link>
 </form>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
    email: '',
    password: '',
    emailFormatValid: true
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

<style>
html, body{
	width:100%;
	height:100%;
	margin:0px;
	font-family: 'Work Sans', sans-serif;
}

body{
  background-size: cover;
  align-items: center;
  background-image:url('https://images-assets.nasa.gov/image/6900952/6900952~orig.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
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
	flex-direction:column;
	padding: 15px; 
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