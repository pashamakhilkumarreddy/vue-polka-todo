const router = require('polka')();

const {
  getUserProfile,
  updateUserProfile,
} = require('../controllers');
const {
  isUserAuthenticated,
} = require('../middlewares');

router.get('/', isUserAuthenticated, getUserProfile)
  .post('/', isUserAuthenticated, updateUserProfile);

module.exports = router;
