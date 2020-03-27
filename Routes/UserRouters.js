const userRouters = require('express').Router()
const UserController = require('../Controllers/UserController.js')

userRouters.post('/register', UserController.register);
userRouters.post('/login', UserController.login);
userRouters.post('/googleLogIn', UserController.googleLogIn);

module.exports = userRouters