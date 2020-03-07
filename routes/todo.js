const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo-controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authentication);

router.post('/', TodoController.createTodo);
router.get('/', TodoController.findAll);
router.get('/:id', authorization, TodoController.findOne);
router.put('/:id', authorization, TodoController.update);
router.patch('/markdone/:id', authorization, TodoController.markDone)
router.patch('/markundone/:id', authorization, TodoController.markUndone)
router.delete('/:id', authorization, TodoController.delete);

module.exports = router;