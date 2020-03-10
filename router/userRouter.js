'use strict';

const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/UserController');

// register
router.post('/register', UserController.register);

// login
router.post('/login', UserController.login);

// Google Sign

router.get('/googleSign', UserController.googleSign)

module.exports = { userRouter: router };
