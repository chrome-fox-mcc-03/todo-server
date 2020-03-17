const router = require('express').Router()
const TodoController = require('../controllers/todoController')
const UserController = require('../controllers/userController')
const {authentication} = require('../middlewares/authentication')
const {authorization} = require('../middlewares/authorization')

router.post('/todos',authentication,TodoController.create)

router.get('/todos',TodoController.findAll)
router.get('/todos/:id',TodoController.findById)

router.put('/todos/:id',authorization,TodoController.updateById)
router.delete('/todos/:id',authorization,TodoController.deleteById)

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.post('/loginGoogle',UserController.loginGoogle)
module.exports = router