'use strict';

const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/UserController');

// register
router.post('/register', UserController.register);

// login
router.post('/login', UserController.login);

module.exports = { userRouter: router };
