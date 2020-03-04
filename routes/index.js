const router = require('express').Router();
const todoRouter = require('./todo');

const UserController = require('../controllers/UserController')

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/gAuth", UserController.gAuth);

router.use("/todos", todoRouter);

module.exports = router;