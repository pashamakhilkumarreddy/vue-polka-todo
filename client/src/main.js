import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueFragment from 'vue-fragment';
import { sync } from 'vuex-router-sync';

import store from '@/store';
import App from './App.vue';
import router from './routes';

import '../node_modules/bulma/css/bulma.min.css';

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueFragment);
sync(store, router);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
