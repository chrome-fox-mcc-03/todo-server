const userRouters = require('express').Router()
const UserController = require('../Controllers/UserController.js')

userRouters.use('/register', UserController.register);
userRouters.use('/login', UserController.login);
userRouters.post('/googleLogIn', UserController.googleLogIn);

module.exports = userRouters