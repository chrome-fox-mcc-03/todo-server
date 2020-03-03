const express = require('express')
const router = express.Router()
const TodoController = require('../Controllers/Todos')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.get('/', TodoController.Display)
router.post('/', TodoController.Create)
router.get('/:id', TodoController.FindId)
router.put('/:id', authorization,TodoController.Update)
router.delete('/:id', authorization,TodoController.Delete)


module.exports = router