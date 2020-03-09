const express = require('express')
const router = express.Router()
const GoogleCalenderController = require('../controllers/googleCalenderController')

router.post('/', GoogleCalenderController.addEvent)


module.exports = router