const router = require('express').Router();
const todoRouters = require('../Routes/TodoRouters.js');
<<<<<<< HEAD
const userRouters = require('../Routes/UserRouters.js');
const UserController = require('../Controllers/UserController.js')

router.use('/register', UserController.register);
router.use('/login', UserController.login);
router.post('/googleLogIn', UserController.googleLogIn);
=======
const userRouters = require('../Routes/userRouters.js');
>>>>>>> 82dc69ef1c37cd067bf4f0273d44184b2e3dd23b

router.use('/', userRouters)
router.use('/todos', todoRouters);


module.exports = router
