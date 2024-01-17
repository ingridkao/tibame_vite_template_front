<template>
  <MainHead/>

  <!-- 頁面路由route渲染的地方 -->
  <RouterView />

  <footer>
    ....
   
  </footer>
</template>

<script>
import { RouterView } from 'vue-router'
import MainHead from '@/components/MainHead.vue'

export default {
  components: {
    MainHead,
    RouterView
  }
};
</script>

<style scoped>
</style>