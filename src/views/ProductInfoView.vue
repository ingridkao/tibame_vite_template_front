<template>
    <div class="product">
        <div v-if="loading">loading...</div>
        <div v-else-if="nodata">nodata...</div>
        <div v-else class="product_container ">
            <div class="product_card_img">
                <img :src="responseData.image" :alt="responseData.title">
            </div>
            <div>
                <h6>{{ responseData.title  }}</h6>
                <p>{{ responseData.description  }}</p>
                <p>$ {{ responseData.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            responseData: {},
            loading: true
        }
    },
    mounted() {
        this.axiosGetData()
    },
    computed: {
        nodata() {
            return Object.keys(this.responseData).length === 0
        }
    },
    methods: {
        axiosGetData() {
            const pageId = this.$route.params.id
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                if (res && res.data) {
                    this.loading = false
                    const target = res.data.find(item=>item.id == pageId)
                    this.responseData = target? target: {}
                }
            })
        }
    }
}

</script>

<style lang="scss">
@import "@/assets/scss/page/product.scss";
</style>
