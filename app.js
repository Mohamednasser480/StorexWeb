require('dotenv').config();
const cors = require('cors');
const morgan = require("morgan");
// const routesHandler = require('./routes');
const connectDb = require('./config/connectDB');
const express = require('express');

const PORT = process.env.PORT;

const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routesHandler(app);

app.listen(PORT,
  () => console.log(`app running on port ${PORT}`)
);