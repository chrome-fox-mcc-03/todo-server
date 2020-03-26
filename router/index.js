'use strict';

const express = require('express');
const router = express.Router();
const { todoRouter } = require('./todoRouter');
const { UserController } = require('../controllers/UserController');

router.use('/todos', todoRouter);

// register
router.post('/register', UserController.register);

// login
router.post('/login', UserController.login);

// Google Sign

router.get('/googleSign', UserController.googleSign)


module.exports = { router };

