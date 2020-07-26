import Api from './Api';

const {
  profile,
} = require('../utils/urls');

export default {
  getProfile() {
    return Api().get(profile);
  },
  updateProfile(payload) {
    return Api().post(profile, payload);
  },
};
