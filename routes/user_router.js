const router = require('express').Router();
const UserController = require('../controller/user_controller.js');

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);

module.exports = router;