<script setup>
import HotProduct from '@/components/home/HotProduct.vue'

import { ref, onMounted, onBeforeMount} from 'vue'
const countDown = ref(60)
const timer = ref(null)

const startTimer = () => { 
  timer.value = setInterval(() => { 
    if (countDown.value > 0) { 
      // 時間未到，減一秒 
      countDown.value--; 
    } else { 
      // 時間到，清除計時器 
      clearInterval(timer.value);
      timer.value = null;
    }
  }, 1000); // 每秒執行一次進入作用域
}
onMounted(()=>{
  startTimer()
})
onBeforeMount(()=>{
  if (timer.value) { 
    clearInterval(timer.value); // 防止記憶體洩漏，清除定時器 
  }
})
</script>

<template>
  <main class="home">
    <h1>{{ countDown }}</h1>
    <section>最新消息</section>
    <HotProduct />
  </main>
</template>

<style lang="scss">
// @import "@/assets/scss/page/home.scss";

</style>
