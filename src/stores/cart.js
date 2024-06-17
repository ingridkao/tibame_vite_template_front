// https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia'

export default defineStore('cartStore', {
  // 對應 data
  state: () => ({
    cart: [],
  }),

  // 對應 computed (物件形式)
  getters: {
    cartCount: (state) => state.cart.length
  },

  // 對應 methods (物件形式)
  actions: {
    checkCart(){
      const storageCart = localStorage.getItem('cart')
      if(this.cart.length > 0 ){
        return this.cart
      }else if(storageCart){
        const cartArray = JSON.parse(storageCart)
        this.cart = cartArray
        return cartArray
      }else{
        return []
      }
    },
    addCart (payload) {
      if(!payload) return

      const isExistIndex = this.cart.findIndex(item => item.id === payload.id)
      if(isExistIndex >= 0){
        this.cart[isExistIndex]['count'] += 1
      }else{
        this.cart.push({
          ...payload,
          count: 1
        })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeCart (payload) {
      if(!payload) return

      const isExistIndex = this.cart.findIndex(item => item.id === payload.id)
      if(isExistIndex >= 0 && this.cart[isExistIndex]['count'] > 1){
        this.cart[isExistIndex]['count'] -= 1
      }else{
        // 移除陣列第幾個位置,一個
        this.cart.splice(isExistIndex, 1);
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    cleanCart() {
      this.cart = []
      localStorage.removeItem('cart')
    }
  }
})