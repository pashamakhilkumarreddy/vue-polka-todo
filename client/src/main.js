import Vue from 'vue';
import VueMeta from 'vue-meta';
import {
  Plugin,
} from 'vue-fragment';
import {
  sync,
} from 'vuex-router-sync';

import router from './routes';
import store from './store';

import App from './App.vue';
import './registerServiceWorker';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './assets/styles/main.scss';

Vue.use(VueMeta);
Vue.use(Plugin);

sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
