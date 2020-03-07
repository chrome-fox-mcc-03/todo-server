const Controller = require('../controllers/userscontroller.js')
const router = require('express').Router()

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/googleSignIn', Controller.googleSignIn)

module.exports = router;