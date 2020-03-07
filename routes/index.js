const router = require('express').Router();
const todoRouter = require('../routes/todoRouter');
const userRouter = require('../routes/userRouter');
const quoteRouter = require('../routes/quoteRouter');
const errorHandler = require('../middlewares/errorHandler');

router.use('/user', userRouter);
router.use('/todos', todoRouter);
router.use('/quote', quoteRouter);

router.use(errorHandler);

module.exports = router;