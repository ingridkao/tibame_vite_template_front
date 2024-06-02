import './assets/scss/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const vueApp = createApp(App)

vueApp.use(createPinia())
vueApp.use(router)

// 渲染在index.html裡面的div#app
vueApp.mount('#app')
