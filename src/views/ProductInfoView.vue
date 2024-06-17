<template>
  <div>
    商品{{ $route.params.id }}<br>
    {{ productInfo }}

    <hr>
    推薦商品
    <RouterLink to="/product/1" >1</RouterLink>
    <RouterLink to="/product/2" >2</RouterLink>
    <RouterLink to="/product/3" >3</RouterLink>
    <RouterLink to="/product/4" >4</RouterLink>
  </div>
</template>
<script>
export default {
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

<style>
a{
  color: #555;
}
</style>