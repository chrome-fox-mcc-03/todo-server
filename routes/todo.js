const router = require('express').Router()
const { createTodo, findAllTodo, updateTodo, destroyTodo, findOneTodo } = require('../controllers/todo')
const authentication = require('../middlewares/authentication')
const authorized = require('../middlewares/authorize')

router.use(authentication)

router.post('/', createTodo)
router.get('/', findAllTodo)
router.get('/:id', findOneTodo)
router.put('/:id', authorized, updateTodo)
router.delete('/:id', authorized, destroyTodo)

module.exports = router