<template>
    <div class="product_card">
        <router-link :to="{
            name: 'productInfo',
            params: { id: product.id }
        }">
            <div class="product_card_img">
                <img :src="product.image" :alt="product.title">
            </div>
            <h6>{{ product.title }}</h6>
            <div>
                <p>{{ product.category }}</p>
                <p>$ {{ product.price }}</p>
            </div>
            <div v-if="product.rating">
                {{ product.rating.rate }}
                ({{ product.rating.count }})
            </div>
        </router-link>

        <Button @click="addCart(product)">加入購物車</Button>
    </div>
</template>

<script>
export default {
    props: ['product'],
    computed: {},
    methods: {
        addCart(info) {
            this.$emit('addCard', info)
        }
    }
}
</script>