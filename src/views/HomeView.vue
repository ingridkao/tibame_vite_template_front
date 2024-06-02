<template>
  <main class="home">
    <section>最新消息</section>
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
    return {}
  },
  mounted() {
  },
  methods:{}
}
</script>

<style lang="scss">
// @import "@/assets/scss/page/home.scss";

</style>
