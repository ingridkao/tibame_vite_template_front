<template>
  <div>
    <input type="text" v-model="username" >
    <br>
    <input type="password" v-model="userPsw" >
    <!-- {{ username }}
    {{ userPsw }} -->
    <br>
    <button @click="login">login</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      username: "mor_2314",
      userPsw: "83r5^_"
    }
  },
  methods:{
    login(){
      axios.post('https://fakestoreapi.com/auth/login',{
        username: this.username,
        password: this.userPsw,
      })
      .then(res=>console.log(res))
    }
  }
} 
</script>