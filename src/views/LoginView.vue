<template>
  <div class="login">
    <h1>This is an login page</h1>
    <div>
      <label for="email">email</label>
      <!-- <input type="email" id="email" v-model="username" /> -->
      <Input
        type="email"
        id="email"
        v-model="username"
        placeholder="Enter email"
      />
      <br />
      <label for="email">password</label>
      <!-- <input type="password" id="password" v-model="au4aa83" /> -->
      <Input
        type="password"
        id="password"
        v-model="au4aa83"
        placeholder="Enter password"
      />
      <br />
      <Button @click.prevent="signin">登入</Button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { mapActions } from "pinia";
import userStore from "@/stores/user";

export default {
  components: {},
  data() {
    return {
      username: "mor_2314",
      au4aa83: "83r5^_",
    };
  },
  methods: {
    //使用 mapActions 輔助函數將/src/stores/user裡的methods 映射在這裡
    ...mapActions(userStore, ["updateToken"]),
    signin() {
      axios
        .post("https://fakestoreapi.com/auth/login", {
          username: this.username,
          password: this.au4aa83,
        })
        .then((response) => {
          if (response.data && response.data.token) {
            console.log(response.data);
            // 調用pinia的updateToken
            this.updateToken(response.data.token);

            // 登入成功後可以使用router.push()轉到首頁
          }
        })
        .catch((error) => {
          // 登入失敗
          // 系統維護中
          console.error(error);

          // 調用pinia的updateToken
          // 將/src/stores/user裡的token清除
          this.updateToken("");
        });
      // this.updateToken(123123213213213) // 如果將這個function放這邊，發動順序會早於API回應
    },
  },
};
</script>
