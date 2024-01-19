import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/activity/ActivityIndex.vue'),
      children: [
        { 
          path: '', 
          name: 'activity-list', 
          component: () => import('../views/activity/ActivityListIndex.vue')  
        },
        { 
          path: ':id', 
          name: 'activity-info', 
          component: () => import('../views/activity/ActivityInfoIndex.vue')  
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    // 404頁面：沒有被配置的路由都會去NotFound
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
