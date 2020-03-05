const router = require('express').Router();
const todoRoutes = require('./todos');
const UserController = require('../controllers/userController');

router.use("/todos", todoRoutes);

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/googleLogin", UserController.googleLogin);

module.exports = router;