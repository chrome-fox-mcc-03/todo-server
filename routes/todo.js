const router = require('express').Router()
const { createTodo, findAllTodo, updateTodo, destroyTodo } = require('../controllers/todo')
const authentication = require('../middlewares/authentication')
const authorized = require('../middlewares/authorize')

router.use(authentication)

router.post('/', createTodo)
router.get('/', findAllTodo)
router.put('/:id', authorized, updateTodo)
router.delete('/:id', authorized, destroyTodo)

module.exports = router