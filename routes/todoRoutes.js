const router = require('express').Router()
const todoController = require('../controllers/todoController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')


router.get('/', todoController.showAllTodo)

router.post('/', authentication, todoController.createTodo)
router.get('/users', authentication, todoController.fetchDataByUserId)
router.get('/:id', authentication, todoController.getTodoById)
router.put('/:id', authentication, authorization, todoController.updateTodoById)
router.delete('/:id', authentication, authorization, todoController.deleteTodoById)


module.exports = router