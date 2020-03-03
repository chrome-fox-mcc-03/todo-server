const router = require('express').Router();
const User = require('../controller/user')

router.post('/register', User.register)
router.post('/login', User.login)

module.exports = router