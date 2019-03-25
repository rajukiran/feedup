import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueRouter from 'vue-router';
import {
  CHECK_AUTH
} from "./store/actions.type";
import ApiService from "./common/api.service";


window._ = require('lodash');
window.Vue = require('vue');
window.VeeValidate = require('vee-validate');

Vue.use(window.VeeValidate);
Vue.use(VueRouter);

Vue.config.productionTip = false;

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');