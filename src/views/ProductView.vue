<template>
  <main class="product">
    <header>
      {{ cart }}
      <br>
      <input type="text" v-model="search">

      <br>
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
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cart'
import ProductCard from '@/components/layout/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  computed: {
      // 這裡帶入兩個參數 : 一個是Store，另一個是要帶入的state,getters
      ...mapState(cartStore, ['cart','cartCount']),
  },
  data() {
    return {
      responseData: [],
      displayData: [],
      search: ''
    }
  },
  //可以用create也可以用mounted
  // created() {
  mounted() {
    // console.log(import.meta.env);
    this.checkCart()
    fetch(`${import.meta.env.BASE_URL}data/product.json`)
    .then(res => res.json())
    .then(json => {
      // 確認有沒有response
      // 備份還原用
      this.responseData = json
      // 顯示用
      this.displayData = json
    })
  },
  watch: { 
    'search': { 
      handler(newObj) { 
        console.log(newObj);
        this.displayDat32wa = this.responseData.filter((item)=>{
          return item.name.includes(this.search)
        })
      }, 
      // deep: true 
    } 
  },
  methods: {
    ...mapActions(cartStore, ['checkCart']),
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
