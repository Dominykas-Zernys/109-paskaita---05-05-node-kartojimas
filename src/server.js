const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const productsRouter = require('./routes/productsRouter');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', productsRouter);

app.listen(PORT, console.log(`server is running on port ${PORT}`));
