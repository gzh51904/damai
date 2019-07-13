import Vue from 'vue'
//vueRouter的使用步骤
// 1.引入
import VueRouter from 'vue-router'
// 2.使用VueRouter插件
Vue.use(VueRouter);
//引入页面组件
import detail from '../components/detail/detail.vue'; 
//实例化router并配置参数
let router = new VueRouter({
  //路由页面信息配置
  routes: [
      {
          //当浏览器地址为#/detail时，渲染detail组件、同下
          name:'Detail',
      path: '/detail',
      component: detail
  } ]
});
export default router;
//导出router