<template>
  <footer class="mainFooter">
    🚢
    {{ content }}
    <input type="number" v-model="money">
    <Button @click="callMoney">我要錢</Button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      money: 0
    }
  },
  props:['content'],
  created() {},
  methods: {
    callMoney(){
      // step1 利用emit呼叫父層
      // console.log('😄');
      this.$emit('callParentPay', this.money, '噢噎')
    }
  }
}
</script>