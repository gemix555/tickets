import Vue from 'vue'
import Router from 'vue-router'
import Tickets from './views/Tickets.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tickets',
      component: Tickets
    }
  ]
})
