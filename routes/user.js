const express = require('express')
const router = express.Router()
const Controller = require('../controller/ControllerUser')

router.get('/',Controller.findAll)
router.post('/register',Controller.register)
router.post('/login',Controller.login)
router.get('/loginGoogle',Controller.loginGoogle)


module.exports = router