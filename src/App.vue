<template>
  <MainHead/>
  <RouterView />
  <MainFooter />
</template>

<script>
import { RouterView } from 'vue-router'
import MainHead from '@/components/MainHead.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MainHead,
    RouterView,
    MainFooter
  }
};
</script>