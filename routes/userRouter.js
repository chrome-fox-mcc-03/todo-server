const router = require('express').Router()
const controller = require('../controllers/userController')


router.post('/signUp', controller.signUp)
router.post('/signIn', controller.signIn)
router.post('/goosignin', controller.gooSignIn)

module.exports= router