import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Login from "./components/login.vue";
import Reg from "./components/register.vue";
import Mine from "./components/mine.vue";
import Banner from "./components/banner.vue";



export default new Router({
  routes: [   
      
      {
        name:"mine",
        path:"/mine",
        component:Mine,
        children:[
          {
            name:"login",
            path:"login",
            component:Login,
          },
          {
            name:"register",
            path:"register",
            component:Reg,
          },
        ]
      },
      {
        name:"banner",
        path:"/banner",
        component:Banner,
      }
  ]
})
