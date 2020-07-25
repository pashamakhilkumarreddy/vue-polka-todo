import Api from './Api';

const {
  login: loginURL,
  register: registerURL,
} = require('../utils/urls');

export default {
  login({
    email,
    password,
  }) {
    return Api().post(loginURL, Object.freeze({
      email,
      password,
    }));
  },
  register({
    email,
    password,
  }) {
    return Api().post(registerURL, Object.freeze({
      email,
      password,
    }));
  },
};
