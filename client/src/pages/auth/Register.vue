<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form-layout #form-content>
      <form class="form" autocomplete="off" @submit.prevent="handleSubmit(register)">
        <h2 class="text-center">Register</h2>
        <div class="form-group">
          <label for="register-email" class="form-label">Email</label>
          <ValidationProvider name="Email" rules="required|email|minmax:6,90" :bails="true"
            v-slot="{ errors }">
            <input type="text" id="register-email" name="loginEmail" class="form-input"
              placeholder="username@domain.com" v-model.trim="user.email" required />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{ error }}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="register-password" class="form-label">Password</label>
          <ValidationProvider name="Password" rules="required|password|minmax:8,90" :bails="true"
            v-slot="{ errors }">
            <input type="password" id="register-password" name="loginPassword" class="form-input"
              placeholder=".........." v-model.trim="user.password" required />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{ error }}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="rememberme" class="form-checkbox">
            <input id="rememberme" type="checkbox"  v-model="user.termsAndCondition"/>
            <i class="form-icon"></i>
            I agree to all the terms and conditions
          </label>
        </div>
        <div class="flex-center justify-between">
          <button type="button" class="btn btn-success"
          @click.prevent="register">Register</button>
          <button type="button" class="btn"
          @click="$navigateTo({ name: 'login' })">
            Login
          </button>
        </div>
      </form>
    </form-layout>
  </ValidationObserver>
</template>
<script>
import FormLayout from '../../layouts/FormLayout.vue';
import AuthenticationService from '../../services/AuthenticationService';

export default {
  name: 'Register',
  components: {
    FormLayout,
  },
  metaInfo: {
    title: 'Register',
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        termsAndCondition: true,
      },
      isLoading: false,
    };
  },
  methods: {
    async register() {
      try {
        if (this.$checkObjProps(this.user)) {
          const {
            email,
            password,
          } = this.user;
          const result = await AuthenticationService.register({
            email,
            password,
          });
          if (result) {
            const { status } = result;
            const {
              success,
            } = result.data;
            if (success && status === 201) {
              this.$navigateTo({
                name: 'login',
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
