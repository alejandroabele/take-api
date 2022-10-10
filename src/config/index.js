require("dotenv").config();
module.exports = {
  port: process.env.PORT || 9000,
  mongodbUri: process.env.MONGODB_URI,
};
