const router = require('express').Router();
const todoRouter = require('./todo_router.js');
const userRouter = require('./user_router.js')

router.use('/todos', todoRouter);
router.use('/users', userRouter);

module.exports = router;