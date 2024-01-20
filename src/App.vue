<template>
  <MainHead />

  <!-- 頁面路由route渲染的地方 -->
  <RouterView />

  <MainFooter />
</template>å

<script>
import { RouterView } from 'vue-router'
import MainHead from '@/components/MainHead.vue'
import MainFooter from '@/components/MainFooter.vue'
//import AOS
export default {
  components: {
    MainHead,
    RouterView,
    MainFooter
  },
  mounted() {
    //AOS.init();
  },
};
</script>

<style lang="scss">
</style>