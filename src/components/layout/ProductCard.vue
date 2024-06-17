<template>
  <div v-if="item" class="card">
    <RouterLink :to="`/product/${item.id}`" class="card_link">
      <div class="card_img">
        <img 
          v-if="item.img" 
          :src="parseIcon(item.img)" 
          :alt="item.name"
        >
        <img v-else src="" alt="">
      </div>
      <div class="card_content">
        <div class="card_content_title">
          <p>{{ item.name || ''  }}</p>
          <p>$ {{ item.price  }}</p>
        </div>
        <div v-if="item.rating">
          <span 
            v-for="star in item.rating" 
            :key="star"
          >
            🌟
          </span>
        </div>
      </div>
      <div class="card_action">
        <!-- <Button @click="addToCart(item, 1)">加入購物車</Button> -->
      </div>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  components: {
    RouterLink
  },
  props: ['item'],
  methods: {
    parseIcon(file) { 
      // 指到src || ..的意思是“回到上一層”
      return new URL(`../../assets/images/product/${file}`, import.meta.url).href 
    }
  }
}
</script>

<style lang="scss">

.card{
  &_link{

  }
  // >a{
  //   display: flex;
  // }
  &_img{
    height: 12rem;
    >img{
      height: 100%;
    }
  }
  &_content {
    &_title{
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      font-size: 0.8rem;
    }
  }
}
</style>