<template>
  <div>
    商品{{ $route.params.id }}<br>
    <ProductCard 
      v-if="productInfo"
      :item="productInfo"
    />
    <hr>
    推薦商品
    <RouterLink to="/product/1" >1</RouterLink>
    <RouterLink to="/product/2" >2</RouterLink>
    <RouterLink to="/product/3" >3</RouterLink>
    <RouterLink to="/product/4" >4</RouterLink>
  </div>
</template>
<script>
import ProductCard from '@/components/layout/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      productInfo: {
        name: '',
        img: '',
        comtent: ''
      }
    }
  },
  watch: { 
    '$route.params.id': { 
      handler(newObj) { 
        console.log(newObj);
        this.fetchInfo()
      }, 
      deep: true 
    } 
  },
  methods: {
    fetchInfo(){
      // 抓API
      fetch(`${import.meta.env.BASE_URL}data/product.json`)
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

<style>
a{
  color: #555;
}
</style>