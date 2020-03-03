const router = require('express').Router();
const todoRouters = require('../Routes/TodoRouters.js');
const userRouters = require('../Routes/UserRouters.js');
const UserController = require('../Controllers/UserController.js')



router.use('/register', UserController.register);
router.use('/login', UserController.login);

router.use('/todos', todoRouters);


module.exports = router