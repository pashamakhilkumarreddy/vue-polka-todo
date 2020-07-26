const {
  User,
} = require('../models');

module.exports = {
  async getUserProfile(req, res) {
    try {
      const {
        email,
      } = req.body;
      const user = await User.findOne({
        email,
      }, 'id name username email gender mobile dob doj');
      if (!user) {
        res.send(res, 404, {
          success: false,
          statusMessages: [
            'No user found',
          ],
        });
        return;
      }
      res.send(res, 200, {
        success: true,
        user,
        statusMessages: [
          'Successfully fetched the user\'s profile',
        ],
      });
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
  async updateUserProfile(req, res) {
    try {
      res.send(res, 200, {
        success: true,
        statusMessages: [
          'Successfully updated the profile',
        ],
      });
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
