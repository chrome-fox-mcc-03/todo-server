const router = require('express').Router();
const Controller = require('../controllers/TodoController');
const { authentication, todoAuthorization } = require('../middlewares/auth');

router.use(authentication);
router.post('/', Controller.create);
router.get('/', Controller.findAll);
router.delete('/:id', todoAuthorization, Controller.delete);
router.get('/:id', todoAuthorization, Controller.findOne);
router.put('/:id', todoAuthorization, Controller.update);
router.patch('/:id/status', todoAuthorization, Controller.updateStatus);

module.exports = router;
