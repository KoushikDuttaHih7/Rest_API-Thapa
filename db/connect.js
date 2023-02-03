const mongoose = require("mongoose");

uri = "link";

mongoose.set("strictQuery", true);

const connectDB = () => {
  return mongoose.connect(uri);
};

module.exports = connectDB;
