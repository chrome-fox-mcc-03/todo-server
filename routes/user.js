const router = require('express').Router()
const { signUp, signIn, gSignIn } = require('../controllers/user')

router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/gsignin', gSignIn)

module.exports = router