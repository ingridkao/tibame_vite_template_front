<template>
    <header class="menu">
        <div class="menu_desktop">
            <RouterLink class="logo" to="/"></RouterLink>
            <div class="menu_desktop_wrapper">
                <Menu mode="horizontal" :active-name="menuTarget">
                    <MenuItem name="1">
                        <RouterLink to="/about">About</RouterLink>
                    </MenuItem>
                    <Submenu name="2">
                        <template #title>
                            other
                        </template>
                        <MenuItem name="2-1">
                            <RouterLink to="/product">Product</RouterLink>
                        </MenuItem>
                        <MenuItem name="2-2">吼吼</MenuItem>
                        <MenuItem name="2-3">哈哈</MenuItem>
                    </Submenu>
                    <MenuItem name="3">
                        <Button v-if="user" @click="logout">logout</Button>
                        <RouterLink v-else to="/login">login</RouterLink>
                    </MenuItem>
                </Menu>
            </div>
            <Button class="menu_mobile_btn" @click="drawerOpen = true" type="primary">Open</Button>
        </div>

        <div class="menu_mobile_wrapper">
            <Drawer :closable="false" v-model="drawerOpen">
                <Button @click="drawerOpen = false" type="primary">Close</Button>
                <Menu mode="vertical" :active-name="menuTarget">
                    <MenuItem name="1">
                        <RouterLink to="/">Home</RouterLink>
                    </MenuItem>
                    <MenuItem name="2">
                        <RouterLink to="/about">About</RouterLink>
                    </MenuItem>
                    <Submenu name="3">
                        <template #title>
                            其他
                        </template>
                        <MenuItem name="3-1">
                            <RouterLink to="/product">Product</RouterLink>
                        </MenuItem>
                        <MenuItem name="3-2">吼吼</MenuItem>
                        <MenuItem name="3-3">哈哈</MenuItem>
                    </Submenu>
                    <MenuItem name="4">
                        <!-- {{ user? 1: 0 }} -->
                        <Button v-if="user" @click="logout">logout</Button>
                        <RouterLink v-else to="/login">login</RouterLink>
                    </MenuItem>
                </Menu>
            </Drawer>
        </div>
    </header>

</template>

<script>
// import { RouterLink } from 'vue-router'
import { Menu, MenuItem, Submenu} from 'view-ui-plus'

// https://pinia.vuejs.org/core-concepts/getters.html#Without-setup-
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/auth'

export default {
    components: {
        // RouterLink: RouterLink,
        Menu: Menu,
        MenuItem,
        Submenu
    },
    data() {
        return {
            menuTarget: 0,
            drawerOpen: false
        }
    },
    computed: {
        // 這裡帶入兩個參數 : 一個是Store，另一個是要帶入的state,getters
        ...mapState(userStore, ['name']),
        user(){
            return this.checkLogin()
        }
    },
    methods: {
        // 這裡帶入兩個參數 : 一個是Store，另一個是要帶入的actions
        ...mapActions(userStore, ['updateToken', 'updateName', 'checkLogin']),
        logout(){
            this.updateToken('')
        }
    },
};
</script>

<style lang="scss" scoped>
.menu{
    &_desktop{
        width: 100%;
        height: 4rem;
        padding: 0 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &_wrapper{
            display: block;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }
    &_mobile{
        &_btn{
            display: none;
            @media screen and (max-width: 768px) {
                display: block;
            }
        }
    }
    .logo{
        width: 3rem;
        height: 3rem;
        background-color: #ddd;
        border-radius: 50%;
    }
}
</style>
