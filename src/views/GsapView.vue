<template>
  <div class="gsapView">
    <Button @click="animateBoxToRight">往右</Button> | 
    <Button @click="animateBoxToLeft">往左</Button>
    <div ref="box" class="box"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  methods: {
    animateBoxToRight() {
      const box = this.$refs.box;
      // 使用 GSAP 創建動畫
      gsap.to(box, { 
        x: 200, 
        duration: 1, 
        ease: 'power2.inOut'
      });
    },
    animateBoxToLeft() {
      const box = this.$refs.box;
      // 使用 GSAP 創建動畫
      gsap.to(box, { 
        x: 0, 
        duration: 1, 
        ease: 'power2.inOut'
      });
    },
  },
};
</script>

<style lang="scss">
.gsapView{
  width: 20rem;
  margin: 2rem auto;
  text-align: center;
  .box {
    width: 100px;
    height: 100px;
    margin: 1rem;
    background-color: #00bcd4;
  }
}
</style>
