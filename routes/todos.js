const todoRoute = require('express').Router()
const controller = require('../controller/controller')

// const authentication = require('../middleware/authentication.js')
// const authorization = require('../middleware/authorization')

// todoRoute.use(authentication)

todoRoute.post('/', controller.add)

todoRoute.get('/', controller.findAll)

todoRoute.get('/:id', controller.findI)

todoRoute.put('/:id', controller.update)
// todoRoute.put('/:id', authorization, controller.update)

todoRoute.delete('/:id' , controller.delete)
// todoRoute.delete('/:id', authorization ,controller.delete)



module.exports = todoRoute