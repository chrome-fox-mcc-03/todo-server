const router = require('express').Router()
const ControllerUser = require('./../controllers/controllerUser')

router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)
router.post('/loginGoogle', ControllerUser.loginGoogle)

module.exports = router