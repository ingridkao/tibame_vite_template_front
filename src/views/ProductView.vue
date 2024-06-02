<template>
  <main class="product">
    <header>

      <!-- ⬇️後續覺得這一段重複性太高也可以在拆出組件⬇️ -->
      <button 
        v-for="starCount in 5" 
        :key="starCount"
        @click="filterRating(starCount)"
      >
        <span 
          v-for="star in starCount"
          :key="star"
        >
          🌟
        </span>
      </button>
      <button @click="clear">清除</button>
      <!-- ⬆️後續覺得這一段重複性太高也可以在拆出組件⬆️ -->

    </header>

    <!-- ⬇️後續覺得這一段重複性太高也可以在拆出組件⬇️ -->
    <div v-if="responseData.length === 0">loading...</div>
    <div v-else-if="displayData.length === 0">nodata...</div>
    <div v-else class="product_container">
      <ProductCard 
        v-for="item in displayData" 
        :key="item.id"
        :item="item"
      />
    </div>
    <!-- ⬆️後續覺得這一段重複性太高也可以在拆出組件⬆️ -->

  </main>
</template>

<script>
import ProductCard from '@/components/layout/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      responseData: [],
      displayData: []
    }
  },
  //可以用create也可以用mounted
  // created() {
  mounted() {
    fetch("/product.json")
    .then(res => res.json())
    .then(json => {
      // 確認有沒有response
      console.log(json);
      // 備份還原用
      this.responseData = json
      // 顯示用
      this.displayData = json
    })
  },
  methods: {
    clear(){
      this.displayData = this.responseData
    },
    filterRating(star) {
      this.displayData = this.responseData.filter((item)=>{
        return item.rating === star
      })
    }
  }
}

</script>

<style lang="scss">
// 越寫越多的時候可以寫在這裡面
// @import "@/assets/scss/page/product.scss";
// 測試時可以寫在這裡
.product{
  max-width: 35.5rem;
  margin: 2rem auto;
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
