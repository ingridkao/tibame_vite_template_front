<template>
  <div class="login">
    <h1>This is an login page</h1>
    <HelloWorld  />
    <HelloWorld msg="可以完成團專嗎" />
    <div v-for="text in content" >
      <HelloWorld :msg="text" />
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data () {
      return {
          content: ['真的啦', '可以的']
      }
  },
};
</script>