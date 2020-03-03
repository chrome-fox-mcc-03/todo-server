const express = require('express')
const router = express.Router()
const todosRouter = require('./Todos')
const Controller = require('../Controllers/User')

router.post('/register', Controller.register)
router.post('/login', Controller.logIn)
router.use('/todos', todosRouter)

module.exports = router