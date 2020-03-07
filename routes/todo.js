const router = require('express').Router();
const ControllerTodo = require('../controllers/todo');
const authentication = require('../middlewares/authentication');
const authorization  = require('../middlewares/authorization');

router.use(authentication)

router.post('/', ControllerTodo.create)

router.get('/', ControllerTodo.findAll)

router.get('/:id', ControllerTodo.findOne)

router.put('/:id', authorization, ControllerTodo.update)

router.delete('/:id', authorization, ControllerTodo.destroy)

module.exports = router