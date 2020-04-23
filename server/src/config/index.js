require('dotenv');

module.exports = {
  server: {
    PORT: parseInt(process.env.PORT, 10),
    CORS_ORIGIN: process.env.CORS_ORIGIN,
  },
  db: {
    DB_NAME: process.env.DB_NAME,
  },
};
