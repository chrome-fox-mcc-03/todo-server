'use strict';

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const { router } = require('./router/router');

app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Port Connected: ${PORT}`);
});
