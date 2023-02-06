const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = (uri) => {
  console.log("Connected to mongoDb");
  return mongoose.connect(uri);
};

module.exports = connectDB;
