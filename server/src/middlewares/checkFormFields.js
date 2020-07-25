const {
  emptyEmailText,
  emptyPasswordText,
} = require('../utils/constants');
const {
  isValidEmail,
  isValidPassword,
} = require('../utils/validations');

module.exports = {
  validationAuthFields(req, res, next) {
    try {
      const {
        email,
        password,
      } = req.body;
      const errors = [];
      if (!email || !email.trim()) {
        errors.push(emptyEmailText);
      }
      if (!password || !password.trim()) {
        errors.push(emptyPasswordText);
      }
      if (errors.length) {
        res.send(res, 401, {
          success: false,
          statusMessages: [
            ...errors,
          ],
        });
        return;
      }
      const emailValidation = isValidEmail(email.trim());
      const passwordValidation = isValidPassword(password.trim());
      if (!emailValidation.isValid) {
        errors.push(emailValidation.message);
      }
      if (!passwordValidation.isValid) {
        errors.push(passwordValidation.message);
      }
      if (errors.length) {
        res.send(res, 401, {
          success: false,
          statusMessages: [
            ...errors,
          ],
        });
        return;
      }
      req.body.email = email.trim();
      req.body.password = password.trim();
      next();
    } catch (err) {
      console.error(err);
    }
  },
};
