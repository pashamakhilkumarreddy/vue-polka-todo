const router = require('polka')();

const {
  login,
  register,
} = require('../controllers');
const {
  validationAuthFields,
} = require('../middlewares');

router.post('/register', validationAuthFields, register)
  .post('/login', validationAuthFields, login);

module.exports = router;
