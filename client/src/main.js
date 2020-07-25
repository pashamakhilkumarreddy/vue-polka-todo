import Vue from 'vue';
import VueMeta from 'vue-meta';
import {
  Plugin,
} from 'vue-fragment';
import {
  sync,
} from 'vuex-router-sync';
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate';

import router from './routes';
import store from './store';

import App from './App.vue';
import './registerServiceWorker';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './assets/styles/main.scss';
import './utils/validations';

Vue.use(VueMeta);
Vue.use(Plugin);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.prototype.$checkObjProps = (obj = {
  test: '',
}) => Object.values(obj).every((val) => val);

Vue.prototype.$navigateTo = function navigateTo(route) {
  if (route) {
    this.$router.push(route);
  }
};

sync(store, router);
setInteractionMode('lazy');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
