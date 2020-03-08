const router = require('express').Router()

const users = require('./users')
const todos = require('./todos')
const api = require('./api')

router.use('/users', users)
router.use('/todos', todos)
router.use('/api', api)

module.exports = router