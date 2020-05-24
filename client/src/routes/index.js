import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    component: Home,
    path: '/',
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
