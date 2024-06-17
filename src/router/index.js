import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: '首頁',
      }
    },
    {
      path: '/home',
      name: 'Home2',
      component: () => import('@/views/Home2View.vue'),
      meta:{
        title: 'composition',
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      meta:{
        title: '商品',
      }
    },
    {
      path: '/product/:id',
      name: 'productInfo',
      component: () => import('@/views/ProductInfoView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 }
  }
})

router.beforeEach(async (to, from) => {
	if( to.meta && to.meta.title){
		document.title = to.meta.title
	}
})


export default router
