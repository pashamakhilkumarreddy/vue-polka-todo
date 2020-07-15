const polka = require('polka');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const responseTime = require('response-time');
const send = require('@polka/send-type');

const {
  server: {
    PORT,
  },
} = require('./config');

const app = polka();

app
  .use(cors())
  .use(helmet())
  .use(compression())
  .use(responseTime())
  .use((req, res, next) => {
    res.send = send;
    next();
  })
  .use(require('./routes'))
  .listen(PORT, () => {
    console.info(`The server is up and running on PORT ${PORT}`);
  });
