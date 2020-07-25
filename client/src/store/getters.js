export default {
  isUserLoggedIn({ user }) {
    return user && user.refreshToken && user.isLoggedIn;
  },
};
