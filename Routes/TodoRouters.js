const todoRouters = require('express').Router()
const TodoController = require('../Controllers/TodoController.js')

todoRouters.post('/', TodoController.create)
todoRouters.get('/', TodoController.findAll)
todoRouters.get('/:id', TodoController.findByPk)
todoRouters.put('/:id', TodoController.update)
todoRouters.delete('/:id', TodoController.destroy)

module.exports = todoRouters