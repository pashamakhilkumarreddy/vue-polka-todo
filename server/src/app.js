const polka = require('polka');
const {
  json,
  urlencoded,
} = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const responseTime = require('response-time');
const rateLimit = require('express-rate-limit');
const send = require('@polka/send-type');

const {
  server: {
    PORT,
  },
} = require('./config');
const {
  getDBURI,
  connectToDB,
} = require('./utils/dbcon');

const app = polka();

app
  .use(json())
  .use(urlencoded({
    extended: true,
  }))
  .use(cors())
  .use(helmet())
  .use(compression())
  .use(responseTime())
  .use(rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 1000,
  }))
  .use((req, res, next) => {
    res.send = send;
    next();
  })
  .use(require('./routes'));

getDBURI({}).then((uri) => {
  connectToDB(uri).then(() => {
    console.info('Successfully connected to the database');
    app.listen(PORT, () => {
      console.info(`The server is up and running on PORT ${PORT}`);
    });
  }).catch((err) => console.error(err));
});
