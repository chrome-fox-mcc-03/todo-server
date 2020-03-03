const router = require('express').Router();
const Contorller = require('../controllers/todo-controller');
const { authentication, todoAuthorization } = require('../middlewares/auth');

router.use(authentication);
router.post('/', Contorller.create);
router.get('/', Contorller.findAll);

module.exports = router;
