<template>
    <header class="menu">
        <RouterLink to="/" class="logo" >
            <img src="@/assets/logo.svg" alt="logo">
        </RouterLink>
        <div>
            <RouterLink 
                v-for="item in menu" 
                :key="item.path"
                :to="item.path"
            >
                {{ item.name }}
            </RouterLink>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    },
    data() {
        return {
            menu: [
            {
                path: '/product',
                name: '所有商品'
            }],
        }
    }
};
</script>

<style lang="scss" scoped>
.menu{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: .5rem 1rem;
    background-color: rgb(222, 239, 234);
    .logo{
        display: inline-block;
        width: 2rem;
        img{
            width: 100%;
        }
    }
}
</style>
