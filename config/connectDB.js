require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_URI);
    console.log(`DB CONNECTED TO HOST ${con.connection.host}`);
  } catch (error) {
    process.exit(1);
  }
}

module.exports = connectDb;