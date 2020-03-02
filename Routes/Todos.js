const express = require('express')
const router = express.Router()
const TodoController = require('../Controllers/Todos')

router.get('/', TodoController.Display)
router.post('/', TodoController.Create)
router.get('/:id', TodoController.FindId)
router.put('/:id', TodoController.Update)
router.delete('/:id', TodoController.Delete)


module.exports = router