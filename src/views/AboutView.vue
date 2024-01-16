<template>
  <div class="about">
    <Carousel v-model="value" loop>
        <CarouselItem>
            <div class="carousel-box">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="carousel-box">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="carousel-box">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="carousel-box">4</div>
        </CarouselItem>
    </Carousel>

    <Button type="info" @click="handleClick">Click me</Button>

    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data () {
      return {
          value: 0
      }
  },
  methods: {
    handleClick() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss">
.carousel-box{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  background-color: #ddd;
}
</style>
