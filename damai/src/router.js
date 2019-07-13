import Vue from 'vue'
import Router from 'vue-router'

import goodsList from './pages/goodsList.vue'



Vue.use(Router)

import login from "./components/login/login.vue";
import register from "./components/register/register.vue";
import mine from "./components/mine/mine.vue";
import homesearch from "./components/home/homesearch.vue";
import home from "./components/home/home.vue";
import city from "./components/home/city.vue";



export default new Router({
  routes: [
      {
        name:"city",
        path:"/city",
        component:city,
      },
      {
        path:"/",
        redirect:"/home",
      },
      {
        name:"home",
        path:"/home",
        component:home,
        children:[

        ]
      }  
      , 
      {
        name:"search",
        path:"/search",
        component:homesearch,
      },

      {
        name:"mine",
        path:"/mine",
        component:mine,
      }, 
      {
        name:"login",
        path:"/login",
        component:login,
      },
      {
        name:"register",
        path:"/register",
        component:register,
      } ,
      {
        name: 'goodslist',
        path: '/goodslist',
        component: goodsList,
      }     
  ]
})
