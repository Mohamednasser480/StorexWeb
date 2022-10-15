require('dotenv').config();
const cors = require('cors');
const morgan = require("morgan");
const path = require("path");
const connectDb = require('./config/connectDB');
const express = require('express');
const routesHandler = require('./routes');

const PORT = process.env.PORT;
const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'media')));

routesHandler(app);

app.listen(PORT,
  () => console.log(`app running on port ${PORT}`)
);