const router = require('express').Router();
const todoRouter = require('./todo_router.js');

router.use('/todos', todoRouter)

module.exports = router;