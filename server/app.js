'use strict';

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const { router } = require('./router/router');
const { ErrorHandler } = require('./middlewares/errorHandler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Port Connected: ${PORT}`);
});
