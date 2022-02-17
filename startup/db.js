const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function () {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    winston.debug("MongoDBga ulanish hosil qilindi...");
  });
};
