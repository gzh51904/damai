import Vue from 'vue'
import Router from 'vue-router'

import goodsList from './pages/goodsList.vue'



Vue.use(Router)

export default new Router({
  routes: [{
    name: 'goodslist',
    path: '/goodslist',
    component: goodsList,

  }]
});