const router = require('express').Router()
const { signUp, SignIn, gSignIn } = require('../controllers/user')

router.post('/signup', signUp)
router.post('/signin', SignIn)
router.post('/gsignin', gSignIn)

module.exports = router