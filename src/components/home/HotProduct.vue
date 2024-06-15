<template>
  <section class="hotProduct">
    <h6>熱門商品</h6>
    <input type="text" v-model="search">
    <button @click="clear">X</button>
    <button @click="filterData">OK</button>
    {{ search }}
    <!-- ⬇️後續覺得這一段重複性太高也可以在拆出組件⬇️ -->
    <div v-if="displayData.length === 0">Loading...</div>
    <div v-else class="hotProduct_container">
      <ProductCard 
        v-for="item in displayData" 
        :key="item.id"
        :item="item"
      />
    </div>
    <!-- ⬆️後續覺得這一段重複性太高也可以在拆出組件⬆️ -->

  </section>
</template>

<script>
// 路徑需要確認
import ProductCard from '@/components/layout/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      productData: [],
      displayData: [],
      search: ""
    }
  },
  mounted() {
    this.fetchProduct()
  },
  computed: {
    topFourProducts() {
      console.log('topFourProducts');
      // 將productData整理好，如productData變化才會觸發
      return this.productData.slice(0, 4);
    }
  },
  methods:{
    fetchProduct(){
      fetch("/data/product.json")
      .then(res => res.json())
      .then(json => {
        // 確認有沒有response
        console.log(json);
        // 顯示用，如果response則顯示空陣列
        this.productData = json || []
        this.displayData = json || []
      })
      .catch((error) => {
        // 錯誤例外
        console.log(`Error: ${error}`);
      })
    },
    filterData(){
      console.log(this.search)
      this.displayData = this.productData.filter((item)=>{
        // return item.name == this.search
        return item.name.includes(this.search)
      })
    },
    clear(){
      this.search = ""
      this.displayData = this.productData
    }
  }
}
</script>

<style lang="scss">
.hotProduct{
  max-width: 35.5rem;
  margin: 2rem auto;
  > h6{
    text-align: center;
    font-size: 1.5rem;
  }
  &_container{
    display: inline-flex;
    width: 100%;
    gap: 0.5rem;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 1rem auto;
  }
}

</style>
