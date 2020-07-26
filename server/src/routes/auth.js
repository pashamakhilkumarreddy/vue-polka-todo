const router = require('polka')();

const {
  login,
  register,
} = require('../controllers');
const {
  validateAuthFields,
} = require('../middlewares');

router.post('/register', validateAuthFields, register)
  .post('/login', validateAuthFields, login);

module.exports = router;
