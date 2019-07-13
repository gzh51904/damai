import Vue from 'vue'
import Router from 'vue-router'

import goodsList from './components/pages/goodsList.vue'
import carts from './components/carts/carts.vue'
import addNewAddress from './components/carts/addNewAddress.vue'


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
      children: [{
        name: 'addnewaddress',
        path: 'addnewaddress',
        component: addNewAddress,
      }]
    }
  ]
});