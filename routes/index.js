const router = require('express').Router()
const Todo = require('../controllers/todo')
const User = require('../controllers/user')
const Authentication = require('../middleware/authentication')
const Authorization = require('../middleware/authorization')


router.post('/register', User.register)
router.post('/login', User.login)
router.post('/google', User.googlesign)

router.use(Authentication)

router.get('/todos', Todo.findAll)
router.post('/todos', Todo.create)
router.get('/todos/:id', Todo.findOne)

router.put('/todos/:id', Authorization, Todo.update)
router.delete('/todos/:id', Authorization, Todo.destroy)


module.exports = router