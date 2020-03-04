const express = require('express')
const router = express.Router()
const user = require('./user')
const todo = require('./todo')

router.use(user)
router.use(todo)

module.exports = router