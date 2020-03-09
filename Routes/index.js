const router = require('express').Router();
const todoRouters = require('../Routes/TodoRouters.js');
const userRouters = require('../Routes/UserRouters.js');

router.use('/', userRouters)
router.use('/todos', todoRouters);


module.exports = router
