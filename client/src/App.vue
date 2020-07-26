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
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Vue Express Todo',
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>
<style lang="scss">
.container {
  padding-bottom: 4rem;
}
</style>
