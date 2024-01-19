// https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia'

export default defineStore('userStore', {
  // 對應 data
  state: () => ({
    token: '',
    name: 'Jenny',
    wallet: '300'
  }),

  // 對應 computed (物件形式)
  getters: {
    getUserName: (state) => `歡迎 ${state.name}`
  },

  // 對應 methods (物件形式)
  actions: {
    checkLogin(){
      const storageToken = localStorage.getItem('token')
      if(this.token){
        return this.token
      }else if(storageToken){
        return storageToken
      }else{
        return ''
      }
    },
    updateToken (payload) {
      if(payload){
        this.token = payload
        localStorage.setItem('token', payload)
      }else{
        this.token = ''
        localStorage.removeItem('token')
      }
    },
    updateName (payload) {
      this.name = payload
    }
  }
})