const router = require('express').Router()
const Controller = require('./../controllers/controller')

router.get('/todos', Controller.getTodos)
router.post('/todos', Controller.addTodo)
router.get('/todos/:id', Controller.getTodoById)
router.put('/todos/:id', Controller.updateTodo)
router.delete('/todos/:id', Controller.deleteTodo)

module.exports = router