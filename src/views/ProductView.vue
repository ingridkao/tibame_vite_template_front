<template>
  <main class="product">
    <h3> 產品 </h3>
    <div>
      <!-- <input type="text" v-model.trim="search" @input="filterHandle"> -->
      <!-- <input type="text" v-model.trim="search"> -->
      <Input v-model.trim="search" placeholder="Enter something..."/>
    </div>

    <div>
      <Button @click="drawerOpen = true">購物車</Button>
    </div>

    <div v-if="loading">loading...</div>
    <div v-else-if="nodata">nodata...</div>
    <div v-else class="product_container">
      <template 
        v-for="item in displayData" 
        :key="item.id"
      >
        <ProductCard 
          v-if="item"
          :product="item"
          @addCard="addCart"
        />
      </template>
    </div>

    <Drawer title="購物車" :closable="false" v-model="drawerOpen">
        <Button shape="circle" @click="drawerOpen = false" type="primary">Close</Button>
        <div v-for="item in cartData" :key="item.id">
          <p>{{ item.title }} </p>
          <p>
            <Button shape="circle">-</Button>
            {{ item.count }}
            <Button shape="circle" @click="addCart(item)">+</Button>
          </p>
        </div>
    </Drawer>
  </main>
</template>
<script>
// 引入axios函式庫
import axios from 'axios'
// 引入組件
import ProductCard from '@/components/ProductCard.vue'
// 引入stores
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cart'

export default {
  components:{
    ProductCard
  },
  data() {
    return {
      search: '',
      responseData: [],
      displayData: [],
      drawerOpen: false
    }
  },
  created() {
    this.axiosGetData()
  },
  computed: {
    //使用 mapState 輔助函數將/src/stores/cart裡的state/data 映射在這裡
    // !!!要寫在computed
    ...mapState(cartStore, ['cartData']),
    loading(){
      return this.responseData.length === 0
    },
    nodata(){
      return this.displayData.length === 0
    }
  },
  watch: {
    search(newVal, oldVal){
      // console.log(this.search);
      // console.log('new:'+newVal);
      // console.log('old:'+oldVal);
      // 可以調用下面的methods
      this.filterHandle()
    },
    responseData: {
      handler(newcData) {
        // console.log(newcData.length);
      },
      // 如果畫面一開始就要監聽要設成true
      // immediate: true,
      // 如果是要監聽陣列或物件要設成true
      deep: true
    }
  },
  methods: {
    //使用 mapActions 輔助函數將/src/stores/cart裡的methods 映射在這裡
    ...mapActions(cartStore, ['addCartData']),
    axiosGetData() {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          if (res && res.data) {
            this.responseData = res.data
            this.displayData = res.data
          }
        })
    },
    filterHandle() {
      this.displayData = this.responseData.filter((item)=>{
        // 如果報錯需要確認資料來源的key是什麼
        // console.log(item);
        return item.title.includes(this.search)
      })
    },
    addCart(product){
      this.addCartData(product)
    }
  }
}

</script>

<style lang="scss">
// 需要先下npm install -D sass
@import "@/assets/scss/page/product.scss";
</style>
