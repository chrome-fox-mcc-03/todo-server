const Controller = require('../controllers/userscontroller.js')
const router = require('express').Router()

router.post('/register', Controller.register)
router.post('/login', Controller.login)

module.exports = router;