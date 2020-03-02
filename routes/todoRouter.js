const router = require('express').Router();
const TodoController = require('../controller/todoController');

router.get('/', TodoController.findAll);
router.post('/', TodoController.create);
router.get('/:id', TodoController.findById);

module.exports = router;