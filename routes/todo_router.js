const router = require('express').Router();
const todoController = require('../controller/todo_controller.js');

router.post('/', (req, res) => {
    todoController.create(req, res);
});

router.get('/', (req, res) => {
    todoController.view(req, res);
});

router.get('/:id', todoController.findById);

router.put('/:id', todoController.updateById);

router.delete('/:id', todoController.deleteById);

module.exports = router;