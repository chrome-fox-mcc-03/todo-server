const todoRouters = require('express').Router();
const TodoController = require('../Controllers/TodoController.js');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization')

todoRouters.use(authentication);

todoRouters.get('/', TodoController.findAll)
todoRouters.post('/', TodoController.create)
todoRouters.get('/:id', TodoController.findByPk)
todoRouters.put('/:id', authorization, TodoController.update)
todoRouters.delete('/:id', authorization, TodoController.destroy)

module.exports = todoRouters