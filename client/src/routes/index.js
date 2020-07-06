import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';

const PageNotFound = () => import('@/pages/PageNotFound.vue');

Vue.use(Router);

export default new Router({
  // base: process.env.baseURL,
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    name: 'home',
    alias: ['/home', 'index'],
  }, {
    path: '*',
    component: PageNotFound,
  }],
});
