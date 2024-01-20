<template>
    <div>
        404
        <Button @click="goHome">回到首頁</Button>
    </div>
</template>

<script>
export default {
    methods:{
        goHome(){
            // this.$router.push()
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>
