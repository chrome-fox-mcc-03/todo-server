const express = require('express')
const router = express.Router()
const StatusController = require('../controllers/statusController')

router.get('/', StatusController.findAll)

module.exports = router