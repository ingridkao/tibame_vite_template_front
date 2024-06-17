<template>
  <main class="home">
    <h1>{{ countDown }}</h1>
    <HotProduct />
  </main>
</template>
<script>
// 路徑需要確認
import HotProduct from '@/components/home/HotProduct.vue'
export default {
  components: {
    HotProduct
  },
  data() {
    return {
      search: "",
      countDown: 60, // 倒數的秒數 
      timer: null // 定時器的引用
    }
  },
  mounted() {
    // this.startTimer()
  },
  beforeUnmount() { 
    // vue實體銷毀前，關掉這一頁面 
    if (this.timer) { 
      clearInterval(this.timer); // 防止記憶體洩漏，清除定時器 
    }
  },
  methods:{
    startTimer() { 
      this.timer = setInterval(() => { 
        if (this.countDown > 0) { 
          // 時間未到，減一秒 
          this.countDown--; 
        } else { 
          // 時間到，清除計時器 
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000); // 每秒執行一次進入作用域
    }
  }
}
</script>

<style lang="scss">
// @import "@/assets/scss/page/home.scss";

</style>
