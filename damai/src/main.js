import Vue from 'vue'
import App from './App.vue'
import'./rem/rem.js'
//引入
import router from './router'

import store from './store'

//整体引入了mint-ui和mui-ui ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.css'
import './lib/dist/css/icons-extra.css'


Vue.config.productionTip = false


Vue.use(MintUI)
//注入Vue根实例中
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')