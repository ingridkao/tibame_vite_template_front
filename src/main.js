import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { 
    Button, Table, Drawer,
    Carousel, CarouselItem 
} from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './assets/scss/main.scss';

import App from './App.vue'
import router from './router'

// 創建一個vue應用程式(主要配置在app.vue裡)
const vueApp = createApp(App)

vueApp.use(createPinia())
vueApp.use(router)

vueApp.component('Button', Button)
vueApp.component('Table', Table)
vueApp.component('Drawer', Drawer)
vueApp.component('Carousel', Carousel)
vueApp.component('CarouselItem', CarouselItem)

// 渲染在index.html裡面的div#app
vueApp.mount('#app')
