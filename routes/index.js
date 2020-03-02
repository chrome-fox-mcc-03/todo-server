const express = require('express')
const router = express.Router()
const todo_routes = require('./todo_routes')


router.use('/todos',todo_routes)

module.exports = router