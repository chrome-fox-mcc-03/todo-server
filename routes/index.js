const router = require('express').Router();
const todoRouter = require('../routes/todoRouter');
const userRouter = require('../routes/userRouter');
const errorHandler = require('../middlewares/errorHandler');

router.use('/user', userRouter)
router.use('/todos', todoRouter);

router.use(errorHandler);

module.exports = router;