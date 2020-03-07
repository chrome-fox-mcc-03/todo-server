const router = require('express').Router();
const Controller = require('../controllers/UserController');

router.post('/register', Controller.register);
router.post('/login', Controller.login);
router.post('/googleSignIn', Controller.googleSignIn);

module.exports = router;