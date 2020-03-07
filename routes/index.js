const router = require('express').Router();
const todoRouter = require('./todo_router.js');
const userRouter = require('./user_router.js');
const error = require('../middlewares/error.js');

router.use('/todos', todoRouter);
router.use('/users', userRouter);

router.use(error);

module.exports = router;