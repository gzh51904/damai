import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//整体引入了mint-ui和mui-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.css'
import './lib/dist/css/icons-extra.css'
<<<<<<< HEAD
import './lib/dist/js/rem'

=======
import './assets/js/rem'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
>>>>>>> cbe24599d4f49f18a953792084c51786753f3c08

Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')