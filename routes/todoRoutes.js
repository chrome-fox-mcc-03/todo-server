const router = require('express').Router()
const todoController = require('../controllers/todoController')
const authentication = require('../middleware/authentication')



router.get('/', todoController.showAllTodo)

router.post('/', authentication ,todoController.createTodo)
router.get('/:id', todoController.getTodoById)
router.put('/:id', todoController.updateTodoById)
router.delete('/:id', todoController.deleteTodoById)


module.exports = router