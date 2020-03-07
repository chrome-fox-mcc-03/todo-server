const router = require('express').Router()
const user = require('./user')
const todo = require('./todo')
const group = require('./group')
const api = require('./api')

router.use('/', user)
router.use('/todo', todo)
router.use('/group', group)
router.use('/api', api)

module.exports = router