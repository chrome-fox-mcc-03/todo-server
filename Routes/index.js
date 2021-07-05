const express = require('express')
const router = express.Router()
const todosRouter = require('./Todos')
const UserController = require('../Controllers/User')

router.post('/register', UserController.register)
router.post('/login', UserController.logIn)
router.get('/glogin', UserController.googleSignin)
router.use('/todos', todosRouter)

module.exports = router