import Vue from 'vue';
import App from './App.vue';            // 路由挂载
import VueRouter from 'vue-router';
import routes from './router';       // 路由列表

import store from './store'              //引入仓库
import axios from 'axios';               //axios异步

//导入iview
import iView from 'iview';
// import { Switch } from 'iview'
import 'iview/dist/styles/iview.css';    // 使用 CSS


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(iView);
// Vue.component('i-switch', Switch)

axios.defaults.baseURL = "http://127.0.0.1:8899"
Vue.prototype.$axios = axios


const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
