const router = require('express').Router()
const todoRoute = require('./todo')
const ControllerUser = require('../controllers/ControllerUser')


router.get('/', (req, res) => res.status(201).json({
    test: 'TEST'
}))

router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)
router.post('/loginGoogle', ControllerUser.loginGoogle)
router.use('/todos', todoRoute)

module.exports = router