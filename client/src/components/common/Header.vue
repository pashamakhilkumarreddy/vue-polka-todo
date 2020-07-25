<template>
  <header class="header navbar">
    <section class="navbar-section">
      <router-link to="/" class="navbar-brand mx-2">Todo</router-link>
      <router-link to="/" class="btn btn-link mx-1">Home</router-link>
    </section>

    <section class="navbar-section">
      <router-link to="/profile" class="btn btn-link mx-1" v-if="isUserLoggedIn">
        Profile
      </router-link>
      <router-link to="/login"
      class="btn btn-link btn-success mx-1" v-if="!isUserLoggedIn">Log In</router-link>
      <span class="btn btn-link btn-error mx-1" v-if="isUserLoggedIn"
      @click.prevent="logout">
        Log Out
      </span>
    </section>
  </header>
</template>
<script>
import {
  mapGetters,
} from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'isUserLoggedIn',
    ]),
  },
  methods: {
    logout() {
      if (this.isUserLoggedIn) {
        this.$store.dispatch('loginUser', null);
        this.$store.dispatch('setTokens', null);
        this.$store.dispatch('setUserType', null);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.6);
  min-height: 2.3rem;
}
</style>
