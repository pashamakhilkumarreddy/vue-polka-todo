<template>
  <ValidationObserver>
    <form-layout #content>
      <form class="form" autocomplete="off">
        <h2 class="text-center">Update Profile</h2>
        <div class="form-group">
          <label for="profile-username" class="form-label">Username</label>
          <ValidationProvider name="Username" rules="required" :bails="true" v-slot="{ errors }">
            <input type="text" id="profile-username" class="form-input" placeholder="johndoe"
              required v-model="user.username" />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{error}}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="profile-name" class="form-label">Name</label>
          <ValidationProvider name="Name" rules="required" :bails="true" v-slot="{ errors }">
            <input type="text" id="profile-name" class="form-input" placeholder="John Doe"
            required v-model="user.name" />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{error}}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="profile-email" class="form-label">Email</label>
          <ValidationProvider name="Email" rules="required" :bails="true" v-slot="{ errors }">
            <input type="email" id="profile-email" class="form-input"
              placeholder="username@domain.com" required v-model="user.email" />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{error}}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider name="Gender" rules="required" :bails="true" v-slot="{ errors }">
            <span>Male</span>
            <label for="profile-gender" class="form-switch d-inline-block mx-2">
              <input type="checkbox" id="profile-gender" required v-model="user.gender" />
              <i class="form-icon"></i> Female
            </label>
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{error}}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="profile-dob" class="form-label">Date of Birth</label>
          <ValidationProvider name="Date of Birth" rules="required" :bails="true"
            v-slot="{ errors }">
            <input type="date" id="profile-dob" class="form-input" placeholder="01-01-1970"
            required v-model="user.dob" />
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{error}}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="profile-mobile" class="form-label">Mobile</label>
          <ValidationProvider name="Mobile Number" rules="required" :bails="true"
            v-slot="{ errors }">
            <div class="input-group">
              <span class="input-group-addon">+91</span>
              <input type="tel" id="profile-mobile" class="form-input" placeholder="9966115353"
                required v-model="user.mobile" />
            </div>
            <template v-for="(error, i) of errors">
              <p class="text-error" :key="i">{{error}}</p>
            </template>
          </ValidationProvider>
        </div>
        <div class="form-group justify-between">
          <button type="button" class="btn btn-success mt-2">Update profile</button>
        </div>
      </form>
    </form-layout>
  </ValidationObserver>
</template>
<script>
import FormLayout from '../layouts/FormLayout.vue';
import ProfileService from '../services/ProfileService';

export default {
  name: 'Profile',
  metaInfo: {
    title: 'Profile',
  },
  components: {
    FormLayout,
  },
  mounted() {
    this.getUserProfile();
  },
  data() {
    return {
      user: {
        username: '',
        name: '',
        email: '',
        gender: null,
        dob: '',
        mobile: '',
      },
    };
  },
  methods: {
    async getUserProfile() {
      try {
        const result = await ProfileService.getProfile();
        if (result) {
          const {
            user,
            success,
          } = result.data;
          if (success && user) {
            this.user.username = user.username;
            this.user.email = user.email;
            this.user.name = user.name || '';
            this.user.gender = user.gender || '';
            this.user.dob = user.dob || '';
            this.user.mobile = user.mobile || '';
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
[type='date'] {
  border: .05rem solid #bcc3ce !important;
}
</style>
