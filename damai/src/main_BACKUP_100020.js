import Vue from 'vue'
import App from './App.vue'
import'./rem/rem.js'
//引入
import router from './routers'

import store from './store'

//整体引入了mint-ui和mui-ui ElementUI
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

// import './css/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.css'
import './lib/dist/css/icons-extra.css'
<<<<<<< HEAD
<<<<<<< HEAD
import './lib/dist/js/rem'
=======
// import './lib/bootstrap-dist/css/bootstrap.css'
>>>>>>> ljf

=======
import './assets/js/rem'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
>>>>>>> cbe24599d4f49f18a953792084c51786753f3c08

Vue.config.productionTip = false


Vue.use(MintUI)
//注入Vue根实例中
new Vue({
  router,
  store,
<<<<<<< HEAD
  render: h => h(App)
=======
  render: h => h(App),
>>>>>>> ljf
}).$mount('#app')