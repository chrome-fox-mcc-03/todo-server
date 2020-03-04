const router = require('express').Router();
const UserController = require('../controllers/userController');

router.post('/signup', UserController.create)
router.post('/signin', UserController.signIn)

module.exports = router;