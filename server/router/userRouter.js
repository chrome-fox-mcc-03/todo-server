'use strict';

const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/UserController');

// register
router.get('/register', UserController.register);

// login
router.get('/login', UserController.login);

// logout
router.get('/logout', UserController.logout);

module.exports = { userRouter: router };
