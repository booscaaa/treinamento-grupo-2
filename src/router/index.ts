import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Wger001 from '../module/geral/wger001/view/wger001.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'wger001',
    component: Wger001
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
