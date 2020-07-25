<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form-layout #form-content>
      <form class="form" autocomplete="off" @submit.prevent="handleSubmit(login)">
        <h2 class="text-center">Login</h2>
        <div class="form-group">
          <label for="login-email" class="form-label">Email</label>
          <ValidationProvider name="Email" rules="required|email|minmax:6,90" :bails="true"
            v-slot="{ errors }">
            <input type="text" id="login-email" name="loginEmail" class="form-input"
              placeholder="username@domain.com" v-model.trim="user.email" required />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{ error }}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="login-password" class="form-label">Password</label>
          <ValidationProvider name="Password" rules="required|password|minmax:8,90" :bails="true"
            v-slot="{ errors }">
            <input type="password" id="login-password" name="loginPassword" class="form-input"
              placeholder=".........." v-model.trim="user.password" required />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{ error }}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="rememberme" class="form-checkbox">
            <input id="rememberme" type="checkbox" v-model="user.rememberme"/>
            <i class="form-icon"></i>Remember me
          </label>
        </div>
        <div class="flex-center justify-between">
          <button type="button" class="btn btn-success"
          @click.prevent="login">Login</button>
          <button type="button" class="btn"
          @click="$navigateTo({ name: 'register' })">
            Register
          </button>
        </div>
        <div class="form-group mt-2">
          <router-link to="/forgot-password">
            Forgot Password
          </router-link>
        </div>
      </form>
    </form-layout>
  </ValidationObserver>
</template>
<script>
import {
  mapActions,
} from 'vuex';

import FormLayout from '../../layouts/FormLayout.vue';
import AuthenticationService from '../../services/AuthenticationService';

export default {
  name: 'Login',
  components: {
    FormLayout,
  },
  metaInfo: {
    title: 'Login',
  },
  computed: {
    ...mapActions([
      'loginUser',
      'setTokens',
      'setUserType',
    ]),
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        rememberme: true,
      },
      isLoading: false,
    };
  },
  methods: {
    async login() {
      try {
        const {
          email,
          password,
        } = this.user;
        if (this.$checkObjProps({
          email,
          password,
        })) {
          const result = await AuthenticationService.login({
            email,
            password,
          });
          if (result) {
            const {
              success,
              user,
              tokens,
            } = result.data;
            if (success && user && tokens) {
              this.$store.dispatch('loginUser', user);
              this.$store.dispatch('setTokens', tokens);
              this.$store.dispatch('setUserType', user.isAdmin);
              this.$navigateTo({
                name: 'home',
              });
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
p.text-error {
  margin: 0 !important;
}
</style>
