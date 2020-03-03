const router = require('express').Router()
const user = require('./user')
const todo = require('./todo')
const group = require('./group')

router.use(user)
router.use(todo)
router.use('/group', group)

module.exports = router