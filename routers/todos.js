const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todoController')
const authentication = require('../middleware/authenthication')

router.use(authentication)
router.post('/', TodoController.create)
router.get('/', TodoController.findAll)
router.get('/:id', TodoController.findOne)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.delete)

module.exports = router