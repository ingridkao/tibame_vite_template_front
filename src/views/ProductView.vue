<script>
// 引入axios函式庫
import axios from 'axios';

export default {
  data() {
    return {
      search: '',
      responseData: [],
      displayData: []
    }
  },
  created() {
    // this.fetchData()
    this.axiosGetData()
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
    }
  }
}

</script>

<template>

  <div class="product">
    <h3> 產品 </h3>
    <div>
      <input type="text" v-model.trim="search" @input="filterHandle">
      <!-- {{ search }} -->
      {{ displayData.length }}
    </div>

    <div class="product_container">
      <!-- 請把以下資料排版 -->
      {{ displayData }}
    </div>

  </div>
</template>

<style lang="scss">
// 需要先下npm install -D sass
@import "@/assets/scss/page/product.scss";
</style>
