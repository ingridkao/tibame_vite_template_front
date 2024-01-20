<template>
  <main class="product">
    <h3> 產品 </h3>
    <h3>{{ $route.params.id }}</h3>
    <div v-if="nodata">
      nodata
    </div>
    <div v-else>
      {{ responseData }}
    </div>
  </main>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      responseData: {}
    }
  },
  created() {
    this.axiosGetData()
  },
  computed: {
    nodata(){
      return Object.keys(this.responseData).length === 0
    }
  },
  watch: {
    // 如果發現商品頁面沒有更動可以將這邊的註解打開
    // '$route.params.id': {
    //   handler(params) {
    //     this.axiosGetData()
    //   }
    // }
  },
  methods: {
    axiosGetData() {
      const pageId = this.$route.params.id
      console.log(pageId);
      
      //使用axios將單一商品資訊取回，前提是後端要支援
      axios.get(`https://fakestoreapi.com/products/${pageId}`)
        .then(res => {
          if (res && res.data) {
            this.responseData = res.data
          }
        })
      
      //如果後端不支援，需要把全部商品取回再find相同id(與URL參數相同)
      // axios.get('https://tibamef2e.com/chd103/g2/api/getProducts.php')
      //   .then(res => {
      //     if (res && res.data) {
      //       const allProduct = res.data
      //       const result = allProduct.find((item) =>{
      //         return item.prod_id == pageId
      //       })
      //       this.responseData = result
      //     }
      //   })
    }
  }
}

</script>

<style lang="scss">
// 需要先下npm install -D sass
@import "@/assets/scss/page/product.scss";
</style>
