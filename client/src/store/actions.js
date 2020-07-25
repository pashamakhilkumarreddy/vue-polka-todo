import {
  SET_USER,
  SET_TOKENS,
  SET_USERTYPE,
} from './mutation-types';

export default {
  loginUser({
    commit,
  }, user) {
    commit(SET_USER, user);
  },
  setTokens({
    commit,
  }, tokens) {
    commit(SET_TOKENS, tokens);
  },
  setUserType({
    commit,
  }, isAdmin) {
    commit(SET_USERTYPE, isAdmin);
  },
};
