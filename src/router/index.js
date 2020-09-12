import Vue from 'vue'
import VueRouter from 'vue-router'
import House from '../views/house.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/house'
  },
  {
    path: '/house',
    name: 'House',
    component: House
  }
]

const router = new VueRouter({
  routes
})

export default router
