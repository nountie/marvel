import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

Vue.config.productionTip = false;
Vue.use(store);
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
