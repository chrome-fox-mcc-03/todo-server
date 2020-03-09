const express = require('express')
const router = express.Router()
const todos = require('./todos')
const users = require('./users')
const statuses = require('./status')
const googleCalenderAPI = require('./googleCalenderAPI')
const api = require('./api')

router.use('/todos', todos)
router.use(users)
router.use('/statuses', statuses)
router.use('/googleCalender',googleCalenderAPI)
router.use('/api', api)

module.exports = router