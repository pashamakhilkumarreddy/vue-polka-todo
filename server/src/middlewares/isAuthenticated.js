/*
  eslint-disable consistent-return
 */
const {
  verify,
} = require('jsonwebtoken');
const {
  whiteListedRoutes,
} = require('../utils');
const {
  jwt,
} = require('../config');

module.exports = {
  isUserAuthenticated(req, res, next) {
    try {
      if (whiteListedRoutes.includes(req.originalUrl)) {
        return next();
      }
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        res.send(res, 401, {
          success: false,
          statusMessages: [
            'A token is required to access this resource',
          ],
        });
        return;
      }
      const refreshToken = authHeader.split(' ')[1];
      if (!refreshToken) {
        res.send(res, 401, {
          success: false,
          statusMessages: [
            'A token is required to access this resource',
          ],
        });
        return;
      }
      const decodedToken = verify(refreshToken, jwt.JWT_SECRET);
      if (!decodedToken) {
        res.send(res, 403, {
          success: false,
          statusMessages: [
            'A valid token is required to access this resource',
          ],
        });
        return;
      }
      req.body.email = decodedToken.email.trim();
      return next();
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
