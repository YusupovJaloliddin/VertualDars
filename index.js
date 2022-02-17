const express = require("express");
const app = express();
require("dotenv").config();
const winston = require("winston");
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/prod")(app);

const port = process.env.PORT || 6000;
const server = app.listen(port, () => {
  winston.info(`${port}chi portni eshitishni boshladim...`);
});

module.exports = server;
