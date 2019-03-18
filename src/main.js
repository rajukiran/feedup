import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
window.Vue = require('vue');
window.VeeValidate = require('vee-validate');

Vue.use(window.VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');