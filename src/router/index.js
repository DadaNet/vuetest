import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Welcome from '@/pages/Welcome'
import Coins from '@/pages/Coins'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
          path: '/welcome',
          name: 'Welcome',
          component: Welcome
      },
      {
          path: '/coins/:id',
          name: 'Coins',
          component: Coins
      }
  ]
})
