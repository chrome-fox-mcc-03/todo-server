const router = require('express').Router();
const TodoController = require('../controller/todo_controller.js');

router.post('/', TodoController.create);

router.get('/', TodoController.view);

router.get('/:id', TodoController.findById);

router.put('/:id', TodoController.updateById);

router.delete('/:id', TodoController.deleteById);

module.exports = router;