const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const config = require('./config');

const app = express();

app.use(cors({
  origin: config.server.CORS_ORIGIN
}));

app.use(helmet());
app.use(compression());

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const PORT = config.server.PORT || 3000;

app.listen(PORT, () => {
  console.info(`Application is running on ${PORT}`);
});