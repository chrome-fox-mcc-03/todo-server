const router = require('express').Router()
const TodoController = require('../controllers/todoController')

router.post('/todos',TodoController.create)
router.get('/todos',TodoController.findAll)
router.get('/todos/:id',TodoController.findById)
router.put('/todos/:id',TodoController.updateById)
router.delete('/todos/:id',TodoController.deleteById)
module.exports = router