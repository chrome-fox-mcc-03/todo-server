const router = require('express').Router()
const TodoRouter = require('./todo.js')

router.use('/todos', TodoRouter)

module.exports = router