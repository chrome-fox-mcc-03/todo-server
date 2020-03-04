const router = require("express").Router();
const todoRouter = require("./todos");
const logInRouter = require("./login");

router.use("/", logInRouter)
router.use("/todos", todoRouter);

module.exports = router;
