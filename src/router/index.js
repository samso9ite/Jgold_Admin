import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create-asset',
    name: 'CreateAsset',
    component: () => import('../views/CreateAsset.vue')
  },
  {
    path: '/',
    name: 'Asset',
    component: () => import('../views/Asset.vue')
  },
  {
    path: '/update-card:id',
    name: 'UpdateCard',
    props: true,
    component: () => import('../views/UpdateCard.vue')
  },
  {
    path: '/update-currency:id',
    name: 'UpdateCurrency',
    props: true,
    component: () => import('../views/UpdateCurrency.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonial',
    props: true,
    component: () => import('../views/Testimonial.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
