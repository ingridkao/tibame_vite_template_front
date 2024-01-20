// https://pinia.vuejs.org/core-concepts/state.html
// vuex
import { defineStore } from 'pinia'

export default defineStore('cartStore', {
  // 對應 data
  state: () => ({
    cartData: []
  }),

  // 對應 computed (物件形式)
  getters: {
  },

  // 對應 methods (物件形式)
  actions: {
    addCartData(product){
      const resultIndex = this.cartData.findIndex((item)=>{
        // 如果報錯需要確認資料來源的key是什麼
        // console.log(item);
        return item.id === product.id
      })
      if(resultIndex < 0){
        // 購物車裡面沒有這筆資料，要把資料丟進去

        // 如果報錯需要確認資料來源的key是什麼
        // console.log(product);
        this.cartData.push({
          id:product.id,
          title:product.title,
          price:product.price,
          count: 1
        })
      }else{
        // 購物車裡面有這筆資料，要把count+1
        const oldCount = this.cartData[resultIndex]['count']
        this.cartData[resultIndex] = {
          ...this.cartData[resultIndex],
          count: oldCount + 1
        }
        // 下一行是錯誤寫法
        // this.cartData[resultIndex]['count'] += 1
      }
    }
  }
})