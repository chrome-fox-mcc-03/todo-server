const router = require("express").Router();
const todoRouter = require("./todos");
const { UserController } = require("../controllers");

router.post("/register", UserController.register);
router.post("/login", UserController.logIn);
router.use("/todos", todoRouter);

module.exports = router;
