const router = require('express').Router();
const TodoController = require('../controller/todo_controller.js');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authentication);

router.post('/', TodoController.create);
router.get('/', TodoController.view);
router.get('/:id', authorization, TodoController.findById);
router.put('/:id', authorization, TodoController.updateById);
router.delete('/:id', authorization, TodoController.deleteById);

module.exports = router;