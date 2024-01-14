<script>
// 路徑需要確認
const imgUrl1 = new URL('../assets/images/home/fern.jpeg', import.meta.url).href
export default {
  data() {
    return {
      imgUrl: imgUrl1,
      list: [
        'home/fern.jpeg',
        'home/frieren.jpeg'
      ],
      imgnum: 1
    }
  },
  methods:{
    getImageUrl(paths){
      // 路徑需要確認
      // return new URL('./assets/images/' + paths, import.meta.url).href
      return new URL(`../assets/images/${paths}`, import.meta.url).href
    },
    addImage(){
      // 1231231231...
      if(this.imgnum === 3){
        this.imgnum = 1
      }else{
        this.imgnum = this.imgnum + 1
      }
    },
    minuxImage(){
      // 321321321321...
      if(this.imgnum === 1){
        this.imgnum = 3
      }else{
        this.imgnum = this.imgnum - 1
      }
    }
  }
}
</script>

<template>
  <div class="home">
    <!-- 引入圖片 -->
      <!-- 方法2 -->
      <!-- <img src="@/assets/images/home/fern.jpeg" alt=""> -->
    
      <!-- 方法2 -->
      <!-- <img :src="imgUrl" alt="" width="125" /> -->
      
      <!-- 方法3 -->
      <!-- <img :src="getImageUrl('home/fern.jpeg')" alt="" width="125" /> -->
      
    <!-- 引入多張圖片，圖片路徑定義在data中的list陣列中 -->
      <!-- <img 
        v-for="(item, index) in list" 
        :key="index"
        :src="getImageUrl(item)" 
        :width="(index+1)*100"
      /> -->

    <!-- 引入多張圖片，動態產生圖片路徑 -->
      <!-- 1. 使用v-for製造1,2,3 -->
        <!-- <p v-for="num in 3" :key="num">
          {{ num }}
        </p> -->

      <!-- 2.使用v-for製造product/1.jpeg,product/2.jpeg,product/3.jpeg -->
        <!-- <p v-for="num in 3">
          {{ `product/${num}.jpeg` }}
        </p> -->

      <!-- 3.使用v-for製造product/1.jpeg,product/2.jpeg,product/3.jpeg，透過調用function把路徑轉換成圖片路徑 -->
      <!-- <p v-for="num in 3">
        {{ getImageUrl(`product/${num}.jpeg`) }}
      </p> -->

      <!-- 4. 同上，使用v-bind src帶入img標籤 -->
      <!-- <img v-for="num in 3" :src="getImageUrl(`product/${num}.jpeg`)" />-->


    <!-- 製作可動態變化的圖片 -->
    <div class="image">
      <div class="image_box">
        <img :src="getImageUrl(`product/${imgnum}.jpeg`)" />
      </div>
      <!-- {{ imgnum }} -->
      <div class="image_thumbnail">
        <button @click="minuxImage"> 👈</button>
        <img v-for="num in 3" 
          :src="getImageUrl(`product/${num}.jpeg`)"
          :width="100"
          @click="imgnum = num"
        />
        <button @click="addImage"> 👉 </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// 需要先npm install -D sass
@import "@/assets/scss/page/home.scss";

</style>
