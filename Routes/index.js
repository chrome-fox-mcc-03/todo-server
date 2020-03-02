const express = require('express')
const router = express.Router()
const todosRouter = require('./Todos')

router.use('/todos', todosRouter)

module.exports = router