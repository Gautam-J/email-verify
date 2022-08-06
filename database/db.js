const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

// connect to mongoDB
const connectToDB = () => {
  try {
    mongoose.connect(uri);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);

    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectToDB;
