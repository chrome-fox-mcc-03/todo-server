const express = require('express')
const router = express.Router()
const ApiController = require('../controllers/apiController')


// router.get('/book', GoogleBookController)
router.get('/publicHoliday', ApiController.getPublicHoliday)

module.exports = router