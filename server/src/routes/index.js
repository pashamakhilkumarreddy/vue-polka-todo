const router = require('polka')();

const auth = require('./auth');
const profile = require('./profile');

router.use('/profile', profile);
router.use('/', auth);

module.exports = router;
