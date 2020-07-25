import {
  SET_USER,
  SET_TOKENS,
  SET_USERTYPE,
} from './mutation-types';

export default {
  [SET_USER](state, user) {
    state.user.user = user;
    if (user) {
      state.user.isLoggedIn = true;
    } else {
      state.user.isLoggedIn = false;
    }
  },
  [SET_TOKENS](state, tokens) {
    if (tokens) {
      state.user.refreshToken = tokens.refreshToken;
      state.user.accessToken = tokens.accessToken;
    } else {
      state.user.refreshToken = null;
      state.user.accessToken = null;
    }
  },
  [SET_USERTYPE](state, isAdmin) {
    state.user.isAdmin = isAdmin || false;
  },
};
