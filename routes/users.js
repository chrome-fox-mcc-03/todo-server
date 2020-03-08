const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/', UserController.login)

router.post('/register', UserController.register)

router.post('/googleLogin', UserController.googleLogin)

module.exports = router