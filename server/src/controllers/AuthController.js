const {
  User,
} = require('../models');
const {
  genUniqUsername,
} = require('../utils/helpers');

module.exports = {
  async register(req, res) {
    try {
      const {
        email,
        password,
      } = req.body;
      const user = await User.findOne({
        email,
      });
      if (user) {
        res.send(res, 400, {
          success: false,
          statusMessages: [
            'A user already exists with the given email. Please try logging in',
          ],
        });
        return;
      }
      const newUser = await new User({
        email,
        username: genUniqUsername(),
        password,
      }).save();
      if (newUser) {
        res.send(res, 201, {
          success: true,
          statusMessages: [
            'Successfully created a new user',
          ],
        });
        return;
      }
    } catch (err) {
      console.error(err);
      res.send(res, 500, {
        success: false,
        statusMessages: [
          'Internal server error',
        ],
      });
    }
  },
  async login(req, res) {
    try {
      const {
        email,
        password,
      } = req.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        res.send(res, 404, {
          success: false,
          statusMessages: [
            'User with the given email is not with us yet! Please register.',
          ],
        });
        return;
      }
      const isValidUser = await user.comparePassword(password);
      if (!isValidUser) {
        res.send(res, 403, {
          statusMessages: [
            'Please check your password',
          ],
        });
        return;
      }
      res.send(res, 200, {
        success: true,
        user: user.formattedUserObj(),
        tokens: {
          refreshToken: user.genRefreshToken(),
          accessToken: user.genAccessToken(),
        },
        statusMessages: [
          'Successfull Login',
        ],
      });
      return;
    } catch (err) {
      console.error(err);
      res.send(res, 500, {
        success: false,
        statusMessages: [
          'Internal server error',
        ],
      });
    }
  },
};
