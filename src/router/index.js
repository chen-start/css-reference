import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: () => import('@/components/LandingPage.vue')
  },
  {
    path: '/information/:id',
    name: 'information',
    component: () => import('@/components/Information.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
