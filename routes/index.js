const router = require('express').Router()
const todoRoute = require('./todo')
const ControllerUser = require('../controllers/ControllerUser')
const errorHandler = require('../middlewares/handleError')


router.get('/', (req, res) => res.status(201).json({
    test: 'TEST'
}))

router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)

router.use('/todos', todoRoute)

router.use (errorHandler)

module.exports = router