require("express-async-errors");

const winston = require("winston");
require("winston-mongodb");

module.exports = function () {
  winston.add(
    new winston.transports.File({
      filename: "logs/vd-logs.log",
      level: "silly",
    })
  );
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/virtualdars-logs",
    })
  );
  winston.add(new winston.transports.Console());

  winston.exceptions.handle(
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/vd-logs.log" })
  );
  //tepadagi winston va pastdagi process.on ikkalasi bitta ishni bajaradi
  // process.on("uncaughtException", (ex) => {
  //   winston.error(ex.message, ex);
  //   process.exit(1);
  // });
  process.on("unhandledRejection", (ex) => {
    // winston.error("unhandledRejection xatosi \n " + ex.message, ex);
    // process.exit(1);
    throw ex;
  });
};
