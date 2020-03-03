const express = require('express')
const router = express.Router()
const TodoRoutes = require('./todos')
const UserController = require('../controllers/user')
const errorHandler = require('../middlewares/errorHandler')


router.post('/register', UserController.register)
router.post('/login', UserController.login)


router.use('/todos', TodoRoutes )


router.use(errorHandler)


module.exports = router