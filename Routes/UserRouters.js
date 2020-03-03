const router = require('express').Router()
const UserController = require('../Controllers/UserController.js')

router.post('/', UserController.register)
router.post('/', UserController.login)

module.exports = router