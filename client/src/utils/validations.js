import { extend } from 'vee-validate';

import {
  usernameRegex,
  emailRegex,
  passwordRegex,
  phoneRegex,
} from './regex';

extend('required', {
  validate(val) {
    return {
      required: true,
      valid: ['', {}, undefined, null, []].indexOf(val) === -1,
    };
  },
  computesRequired: true,
  message: '{_field_} is required',
});

extend('username', (username) => {
  if (username && usernameRegex.test(username)) return true;
  return 'Please enter a valid username';
});

extend('email', (email) => {
  if (email && emailRegex.test(email)) return true;
  return 'Please enter a valid email';
});

extend('password', (password) => {
  if (password && passwordRegex.test(password)) return true;
  return 'Please enter a valid password';
});

extend('phone', (phone) => {
  if (phone && phoneRegex.text(phone)) return true;
  return 'Please enter a valid phone number';
});

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: '{_field_} should be of atleast {min} characters and not more than {max} characters',
});
