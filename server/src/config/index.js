require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || '3000',
  },
  db: {},
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30d',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_ACCESS_TOKEN_EXPIRY || '15m',
    JWT_ISSUER: process.env.JWT_ISSUER || 'stacy',
  },
};
