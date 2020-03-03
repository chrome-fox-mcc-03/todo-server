const express = require('express');
const router = express.Router();
const todoRoutes = require('./todo');
const UserController = require('../controllers/user-controller')

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);

router.use('/todos', todoRoutes)

module.exports = router