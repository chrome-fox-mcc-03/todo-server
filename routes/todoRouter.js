const router = require('express').Router();
const TodoController = require('../controllers/todoController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authentication);

router.get('/', TodoController.findAll);
router.post('/', TodoController.create);
router.get('/:id', TodoController.findById);

router.use('/:id', authorization);

router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.delete);

module.exports = router;