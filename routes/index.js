const router = require("express").Router();
const todoRouter = require("./todos");
const { LogInController } = require("../controllers");

router.post("/register", LogInController.register);
router.post("/login", LogInController.logIn);
router.use("/todos", todoRouter);

module.exports = router;
