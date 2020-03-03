const router = require('express').Router()
const { createTodo, findAllTodo, updateTodo, destroyTodo } = require('../controllers/todo')

router.post('/', createTodo)
router.get('/', findAllTodo)
router.put('/:id', updateTodo)
router.delete('/:id', destroyTodo)

module.exports = router