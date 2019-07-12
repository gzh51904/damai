import Vue from 'vue'
import Router from 'vue-router'

import goodsList from './components/pages/goodsList.vue'
import carts from './components/carts.vue'



Vue.use(Router)

export default new Router({
  routes: [{
      name: 'goodslist',
      path: '/goodslist',
      component: goodsList,

    },
    {
      name: 'carts',
      path: '/carts',
      component: carts,

    }
  ]
});