const router = require('express').Router()
const TodoRouter = require('./todo.js')
const UserController = require('../controllers/userController')

router.post('/signup', UserController.signUp)
router.post('/signin', UserController.signIn)
router.post('/googlesignin', UserController.googleLogin)


router.use('/todos', TodoRouter)

module.exports = router