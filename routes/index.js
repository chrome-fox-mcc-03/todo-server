const router = require('express').Router()
const TodoController = require('../controllers/todoController')
const {authentication} = require('../middlewares/authentication')
const {authorization} = require('../middlewares/authorization')

router.post('/todos',authentication,TodoController.create)

router.get('/todos',TodoController.findAll)
router.get('/todos/:id',TodoController.findById)

router.put('/todos/:id',authorization,TodoController.updateById)
router.delete('/todos/:id',TodoController.deleteById)

router.post('/register', TodoController.register)
router.post('/login', TodoController.login)
module.exports = router