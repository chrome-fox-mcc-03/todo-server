const router = require('express').Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.showAllTodo)
router.post('/', todoController.createTodo)
router.get('/:id', todoController.getTodoById)
router.put('/:id', todoController.updateTodoById)
router.delete('/:id', todoController.deleteTodoById)


module.exports = router