<template>
  <div class="product">
    <h3> 產品 </h3>
    <div>
      <!-- <input type="text" v-model.trim="search" @input="filterHandle"> -->
      <input type="text" v-model.trim="search">
      <input type="text" v-model.trim="category">
      <!-- {{ search }} -->
      {{ dataCount }}
      <!-- {{ displayData.length }} -->
      <Button @click="drawerOpen = true">購物車</Button>

    </div>

    <div v-if="loading">loading...</div>
    <div v-else-if="nodata">nodata...</div>
    <div v-else class="product_container">
      <div 
        v-for="item in displayData" 
        :key="item.id"
        class="product_card"
      >
        <div @click="goToProduct(item)">
          <div class="product_card_img">
            <img :src="item.image" :alt="item.title">
          </div>
          <h6>{{ item.title  }}</h6>
          <div>
            <p>{{ item.category  }}</p>
            <p>$ {{ item.price  }}</p>
          </div>
          <div v-if="item.rating">
            {{ item.rating.rate }}
            ({{ item.rating.count }})
          </div>
        </div>
        <Button @click="addToCart(item, 1)">加入購物車</Button>
      </div>
    </div>


    <Drawer :closable="false" v-model="drawerOpen">
        <header>
          <h6>購物車</h6>
          <Button shape="circle" @click="drawerOpen = false" type="primary">Close</Button>
        </header>
        <!-- {{ cart }} -->
        <div v-for="item in cart" :key="item.id">
          {{ item.title }}
          <br>
          <!-- {{ item.price }} -->
          <Button shape="circle" @click="reduceFromCart(item)">-</Button>
          {{ item.count }}
          <Button shape="circle" @click="addToCart(item)">+</Button>
          <Button @click="removeFromCart(item)">移除</Button>
        </div>
    </Drawer>
  </div>
</template>

<script>
// 引入axios函式庫
import axios from 'axios';

export default {
  data() {
    return {
      search: '',
      category: '',
      responseData: [],
      displayData: [],
      drawerOpen:false,
      cart: [],
    }
  },
  created() {
    // this.fetchData()
    this.axiosGetData()
  },
  computed: {
    dataCount(){
      return this.displayData.length
    },
    loading(){
      return this.responseData.length === 0
    },
    nodata(){
      return this.displayData.length === 0
    }
  },
  watch: {
    // 每当 search 改变时，这个函数就会执行
    search(newSearch, oldsearch) {
      console.log('new:' +newSearch);
      console.log('old:'+oldsearch);
      this.filterHandle()
    },
    category: {
      handler(newcCategory) {
        console.log(newcCategory);
      },
      // 在组件实例创建时，强制立即执行回调，預設false
      immediate: true
    }
  },
  methods: {
    fetchData() {
      //使用fetch
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          this.responseData = json
        })
    },
    axiosGetData() {
      //使用axios
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
        // console.log(item);
        return item.title.includes(this.search)
      })
    },
    goToProduct(product){
      this.$router.push({
        name: 'productDetail',
        params: {
          id: product.id
        }
      })
    },
    addToCart(product) {
      const addedIndex = this.cart.findIndex(item => item.id === product.id)
      if(addedIndex >=0){
        this.cart[addedIndex] = {
          ...this.cart[addedIndex],
          count: this.cart[addedIndex]['count'] + 1
        }
      }else{
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          count: 1
        })
      }
    },
    reduceFromCart(product){
      const productIndex = this.cart.findIndex(item => item.id === product.id)
      if(this.cart[productIndex] && this.cart[productIndex]['count'] > 1){
        this.cart[productIndex] = {
          ...this.cart[productIndex],
          count: this.cart[productIndex]['count'] - 1
        }
      }else{
        this.cart.splice(productIndex, 1)
      }
    },
    removeFromCart(product){
      const productIndex = this.cart.findIndex(item => item.id === product.id)
      this.cart.splice(productIndex, 1)

    }
  }
}

</script>

<style lang="scss">
// 需要先下npm install -D sass
@import "@/assets/scss/page/product.scss";
</style>
