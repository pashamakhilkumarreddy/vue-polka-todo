<template>
  <fragment>
    <app-header />
      <main class="container">
        <router-view />
      </main>
    <app-footer />
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Vue Express Todo',
  },
  components: {
    Fragment,
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  position: relative;
  min-height: 100vh;
}
</style>
