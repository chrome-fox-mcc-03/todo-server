const router = require('express').Router()
const Controller = require('./../controllers/controller')
const authorization = require('./../middleware/authorization')


router.post('/todos', Controller.addTodo)
router.get('/todos', Controller.getTodos)
router.get('/todos/:id', authorization, Controller.getTodoById)
router.put('/todos/:id', authorization, Controller.updateTodo)
router.delete('/todos/:id', authorization, Controller.deleteTodo)

module.exports = router