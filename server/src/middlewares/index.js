const checkFormFields = require('./checkFormFields');
const isAuthenticated = require('./isAuthenticated');

module.exports = {
  ...checkFormFields,
  ...isAuthenticated,
};
