const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todoController')
const authentication = require('../middleware/authenthication')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.post('/', TodoController.create)
router.get('/', TodoController.findAll)
router.get('/:id', TodoController.findOne)
router.put('/:id', authorization, TodoController.update)
router.delete('/:id', authorization, TodoController.delete)

module.exports = router