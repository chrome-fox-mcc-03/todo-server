const router = require('express').Router();
const todoRouters = require('../Routes/TodoRouters.js');

router.use('/todos', todoRouters)

module.exports = router