const router = require('express').Router();
const todo = require('./todo');
const auth = require('./auth');

router.use("/todos", todo)

router.use(auth)

module.exports = router
