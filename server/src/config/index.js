require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || '4000',
  },
  db: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '27017',
    DB_NAME: process.env.DB_NAME || 'todos',
    DB_USER: process.env.DB_USER || 'test',
    DB_PASSWORD: process.env.DB_PASSWORD || 'test',
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'AoQJWbPkrssuvjxmYL1ygq/wTDhNVQ7ynhZ582q9Jhk=',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30d',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_ACCESS_TOKEN_EXPIRY || '15m',
    JWT_ISSUER: process.env.JWT_ISSUER || 'stacy',
  },
};
