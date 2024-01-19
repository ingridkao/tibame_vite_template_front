<template>
  <div class="login">
    <h1>This is an login page</h1>
    <!-- <HelloWorld  />
    <HelloWorld msg="可以完成團專嗎" />
    <div v-for="text in content" >
      <HelloWorld :msg="text" />
    </div> -->
    <div>
      <label for="email">email</label>
      <input type="email" id="email" v-model="username" />
      <br/>
      <label for="email">password</label>
      <input type="password" id="password" v-model="pswdddv" />
      <br/>
      <button @click.prevent="signin">登入</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import { mapActions } from 'pinia'
import userStore from '@/stores/auth'

export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      // content: ['真的啦', '可以的']
      username:'mor_2314',
      pswdddv:'83r5^_'
    }
  },
  created(){
    // 判斷有沒有登入過，如果沒有token等同於沒有登入
    const user = this.checkLogin()
    if(user){
      //有登入資訊轉到首頁
      this.$router.push('/')
    }
  },
  methods:{
    ...mapActions(userStore, ['updateToken', 'updateName', 'checkLogin']),
  	signin(){
      // 前面可以寫一些基本驗證

      // fetch('https://fakestoreapi.com/auth/login',{
      //   method:'POST',
      //   headers: new Headers({
      //     "Content-Type": "application/json",
      //   }),
      //   body:JSON.stringify({
      //       username: "mor_2314",
      //       password: "83r5^_"
      //   })
      // })
      // .then(res=>res.json())
      // .then(json=>console.log(json))

      axios.post('https://fakestoreapi.com/auth/login', {
        // username: "mor_2314",
        // password: "83r5^_"
        username: this.username,
        password: this.pswdddv
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if(response.data && response.data.token){
          // localStorage.setItem('token', response.data.token)
          this.updateToken(response.data.token)
					this.$router.push('/')
        }
      })
      .catch(error => console.error(error));

      // 1. 通常不會開跨域
			// axios.post('https://tibamef2e.com/cgd103/g1/api/getConfirmMember.php',{
      //   mem_account: "charmy101@gmail.com",
      //   mem_psw: "charmy101"
			// })
			// .then(res=>{
      //   console.log(res);
			// 	// if(json.token){
			// 	// 	localStorage.setItem('token', json.token)
			// 	// 	this.$router.push('/')
			// 	// }
			// })
  	}
	}
};
</script>

<style scoped>
.login > div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>