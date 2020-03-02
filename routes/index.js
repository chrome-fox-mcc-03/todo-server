const router = require('express').Router()
const todoController = require('../controllers/todoController')

router.get('/', (req, res) => {
    res.status(200).json({
    })
})

router.get('/todos', todoController.showData)
router.post('/todos', todoController.createData)
router.get('/todos/:id', todoController.getTodoById)
router.put('/todos/:id', todoController.updateTodoById)
router.delete('/todos/:id', todoController.deleteTodoById)


module.exports = router