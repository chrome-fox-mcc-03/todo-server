const router = require('express').Router();
const todoRouter = require('../routes/todoRouter');
const UserController = require('../controllers/userController');

router.post('/signup', UserController.create)
router.use('/todos', todoRouter);

module.exports = router;