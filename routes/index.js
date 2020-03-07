const router = require('express').Router();
const UserRoute = require('./user');
const TodoRoute = require('./todo');

router.use('/', UserRoute);
router.use('/todo', TodoRoute);

module.exports = router;