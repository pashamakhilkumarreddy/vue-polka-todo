<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" decoding="async" loading="lazy" importance="low" />
        </a>

        <a role="button" :class="['navbar-burger', 'burger', { 'is-active': isNavbarOpen }]"
        aria-label="menu" aria-expanded="false" data-target="main-navbar"
        @click="toggleNavbarDisplay">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="main-navbar" :class="['navbar-menu', { 'is-active': isNavbarOpen } ]">
        <div class="navbar-start">
          <a href="/" class="navbar-item">
            Home
          </a>
        </div>
        <div class="navbar-end">
          <a href="/" class="navbar-item">
            Home
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
header {
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
}
</style>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbarDisplay() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>
