<template>
  <main class="product">
    <h3> 產品 </h3>
    <div>
      <!-- <input type="text" v-model.trim="search" @input="filterHandle"> -->
      <!-- <input type="text" v-model.trim="search"> -->
      <Input v-model.trim="search" placeholder="Enter something..."/>
    </div>

    <div>
      <!-- 暫時可以先寫在這邊 -->
      <h6>購物車</h6>
      <ul>
        <li v-for="item in cartData">
          <p>{{ item.title }} </p>
          <p>{{ item.count }} </p>
        </li>
      </ul>
    </div>

    <div v-if="loading">loading...</div>
    <div v-else-if="nodata">nodata...</div>
    <div v-else class="product_container">
      <div 
        v-for="item in displayData" 
        :key="item.id"
        class="product_card"
      >
        <router-link :to="{
            name: 'productInfo',
            params: {id: item.id}
        }">
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
        </router-link>

        <Button @click="addCart(item)">加入購物車</Button>
      </div>
    </div>
  </main>
</template>
<script>
// 引入axios函式庫
import axios from 'axios';
export default {
  data() {
    return {
      search: '',
      responseData: [],
      displayData: [],
      cartData: []
    }
  },
  created() {
    // this.fetchData()
    this.axiosGetData()
  },
  computed: {
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
    // fetchData() {
    //   //使用fetch
    //   fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(json => {
    //       this.responseData = json
    //     })
    // },
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
    addCart(product){
      // console.log(product);
      // this.cartData.push({
      //   ...product,
      //   count: 1
      // })
      const resultIndex = this.cartData.findIndex((item)=>{
        return item.id === product.id
      })
      if(resultIndex < 0){
        // 購物車裡面沒有這筆資料，要把資料丟進去
        this.cartData.push({
          id:product.id,
          title:product.title,
          price:product.price,
          count: 1
        })
      }else{
        // 購物車裡面有這筆資料，要把count+1
        const oldCount = this.cartData[resultIndex]['count']
        this.cartData[resultIndex] = {
          ...this.cartData[resultIndex],
          count: oldCount + 1
        }
        // 下一行是錯誤寫法
        // this.cartData[resultIndex]['count'] += 1
      }
      // console.log(this.cartData);
    }
  }
}

</script>

<style lang="scss">
// 需要先下npm install -D sass
@import "@/assets/scss/page/product.scss";
</style>
