const router = require('express').Router();
const UserController = require('../controller/user_controller.js');

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.post('/googleSignIn', UserController.google);

module.exports = router;