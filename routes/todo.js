const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo-controller');

router.post('/', TodoController.createTodo)
router.get('/', TodoController.findAll)
router.get('/:id', TodoController.findOne)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.delete)

module.exports = router;