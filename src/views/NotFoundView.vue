<template>
    <div class="notFound">
        <h1>404</h1>
        <Button type="info" @click="goHome">回到首頁</Button>
    </div>
</template>
  
<script>
    export default {
        data () {
            return {}
        },
        methods: {
            goHome() {
                this.$router.push({ 
                    name: 'home'
                })
            }
        },
    };
</script>
  
<style lang="scss">
</style>
  