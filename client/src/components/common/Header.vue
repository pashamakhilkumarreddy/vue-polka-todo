<template>
  <header class="header navbar">
    <section class="navbar-section">
      <router-link to="/" class="navbar-brand mx-2">Todo</router-link>
      <router-link to="/" class="btn btn-link mx-1">Home</router-link>
    </section>

    <section class="navbar-section">
      <router-link to="/profile" class="btn btn-link mx-1">Profile</router-link>
      <router-link to="/login" class="btn btn-link btn-primary mx-1">Log In</router-link>
      <span class="btn btn-link btn-error mx-1">Log Out</span>
    </section>
  </header>
</template>
<script>
export default {
  name: 'Header',
};
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.6);
  min-height: 2.3rem;
}
</style>
