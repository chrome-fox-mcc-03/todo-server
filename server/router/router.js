'use strict';

const express = require('express');
const router = express.Router();
const { todoRouter } = require('../router/todoRouter');
const { userRouter } = require('../router/userRouter');

router.use('/todos', todoRouter);
router.use('/', userRouter);

module.exports = { router };
