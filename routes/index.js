const router = require('express').Router();
const todoRouter = require('../routes/todoRouter');

router.use('/todos', todoRouter);


module.exports = router;