const router = require('express').Router()
const todoController = require('../controllers/todoController')

router.get('/', (req, res) => {
    let welcome = `Welcome to Todo App
        Please proceed to the Documentation to get started
        Docs : https://bhaktitodoapps.docs.apiary.io/#`

    res.status(200).send(welcome)
})

router.get('/todos', todoController.showAllTodo)
router.post('/todos', todoController.createTodo)
router.get('/todos/:id', todoController.getTodoById)
router.put('/todos/:id', todoController.updateTodoById)
router.delete('/todos/:id', todoController.deleteTodoById)


module.exports = router