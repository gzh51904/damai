import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = 'http://localhost:9001/admin/api/rest/categories';

//整体引入了mint-ui和mui-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.css'
import './lib/dist/css/icons-extra.css'
import './assets/js/rem'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')