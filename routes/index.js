const express = require('express')
const router = express.Router()
const user = require('./user')
const todo = require('./todo')

router.use(todo)
router.use(user)

module.exports = router