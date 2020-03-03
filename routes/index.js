const router = require('express').Router()

const users = require('./users')
const todos = require('./todos')
const groups = require('./groups')

router.use('/users', users)
router.use('/todos', todos)
router.use('/groups', groups)

module.exports = router