import axios from 'axios';
import {
  baseURL,
} from '../config';
import store from '../store';

export default () => axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${store.state.user.refreshToken || ''}`,
  },
});
