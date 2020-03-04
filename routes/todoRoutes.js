const router = require('express').Router()
const todoController = require('../controllers/todoController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')


router.get('/', todoController.showAllTodo)

router.post('/', authentication, todoController.createTodo)
router.get('/:id', authentication, todoController.getTodoById)
router.put('/:id', authorization, todoController.updateTodoById)
router.delete('/:id', todoController.deleteTodoById)


module.exports = router