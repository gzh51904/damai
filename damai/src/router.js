import Vue from 'vue'
import Router from 'vue-router'
import detail from './components/detail/detail.vue'; 


Vue.use(Router)

export default new Router({
  routes: [

    {
      //当浏览器地址为#/detail时，渲染detail组件、同下
      name:'Detail',
  path: '/detail',
  component: detail
} 
  ]
})
