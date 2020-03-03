const router = require('express').Router()
const Todo = require('../controllers/todo')
const User = require('../controllers/user')

router.post('/register', User.register)
router.post('/login', User.login)



router.get('/todos', Todo.findAll)
router.post('/todos', Todo.create)
router.get('/todos/:id', Todo.findOne)
router.put('/todos/:id', Todo.update)
router.delete('/todos/:id', Todo.destroy)


module.exports = router