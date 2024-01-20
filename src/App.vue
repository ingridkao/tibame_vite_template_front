<template>
  <MainHead />

  <!-- 頁面路由route渲染的地方 -->
  <main>
    <RouterView />
  </main>

  <MainFooter />
</template>
å

<script>
import { RouterView } from "vue-router";
import MainHead from "@/components/MainHead.vue";
import MainFooter from "@/components/MainFooter.vue";
//import AOS
export default {
  components: {
    MainHead,
    RouterView,
    MainFooter,
  },
  mounted() {
    //AOS.init();
  },
};
</script>

<style scoped>
main {
  height: calc(100vh - 7rem);
  height: calc(100dvh - 7rem);
  overflow: scroll;
  overflow-x: hidden;
}
</style>
