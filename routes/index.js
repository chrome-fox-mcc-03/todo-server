const router = require('express').Router();
const todo = require('./todo');
const user = require('./user');
const countdown = require('./countdown');

router.use(user)

router.use("/todos", todo)

router.use(countdown)

module.exports = router
