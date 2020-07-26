import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Register from '@/pages/auth/Register.vue';
import Login from '@/pages/auth/Login.vue';

const PageNotFound = () => import('@/pages/PageNotFound.vue');
const Profile = () => import('@/pages/Profile.vue');

Vue.use(Router);

export default new Router({
  // base: process.env.baseURL,
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    name: 'home',
    alias: ['/home', '/index'],
  }, {
    path: '/register',
    component: Register,
    name: 'register',
  }, {
    path: '/login',
    component: Login,
    name: 'login',
  }, {
    path: '/profile',
    component: Profile,
    name: 'profile',
  },
  {
    path: '*',
    component: PageNotFound,
  }],
});
