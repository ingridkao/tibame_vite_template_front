<template>
  <MainHead/>

  <!-- 頁面路由route渲染的地方 -->
  <main>
    <RouterView />
  </main>

  <MainFooter 
    :content1="money"
    @callParentPay="payMoney"
  />
</template>

<script>
import { RouterView } from 'vue-router'
import MainHead from '@/components/MainHead.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MainHead,
    RouterView,
    MainFooter
  },
  data() {
    return {
      money: 100
    }
  },
  methods: {
    payMoney(amount){
      this.money += amount
    }
  }
};
</script>

<style scoped>
main{
  height: calc(100vh - 7rem);
  height: calc(100dvh - 7rem);
}
</style>