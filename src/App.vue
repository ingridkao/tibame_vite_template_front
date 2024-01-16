<template>
  <MainHead/>

  <!-- 頁面路由route渲染的地方 -->
  <RouterView />

  <footer>
    <HelloWorld msg="You did it!" />
  </footer>
</template>

<script>
import { RouterView } from 'vue-router'

import MainHead from '@/components/MainHead.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    MainHead,
    HelloWorld,
    RouterView
  },
};
</script>

<style scoped>
</style>