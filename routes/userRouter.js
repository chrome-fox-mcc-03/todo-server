const router = require('express').Router()
const controller = require('../controllers/userController')


router.post('/signUp', controller.signUp)
router.post('/signIn', controller.signIn)

module.exports= router