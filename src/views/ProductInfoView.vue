<template>
  <div>
    {{ $route.params.id }}<br>
    {{ productInfo }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      productInfo: {}
    }
  },
  methods: {
    fetchInfo(){
      // 抓API
      fetch("/data/product.json")
      .then(res => res.json())
      .then(json => {
        this.productInfo = json.find(item => {
          return item.id == this.$route.params.id
        })
      })
      .catch((error) => {
        // 錯誤例外
        console.log(`Error: ${error}`);
      })
    }
  },
  mounted(){
    this.fetchInfo()
  },
}
</script>