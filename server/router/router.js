'use strict';

const express = require('express');
const router = express.Router();
const { todoRouter } = require('../router/todoRouter');

router.use('/todos', todoRouter);

module.exports = { router };
