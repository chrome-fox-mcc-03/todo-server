const router = require("express").Router();
const authenticator = require("../middlewares/authentification");
const authorize = require("../middlewares/authorization");
const { TodoController } = require("../controllers");

router.use(authenticator);
router.post("/", TodoController.create);
router.get("/", TodoController.findAll);
router.get("/:id", authorize, TodoController.findId);
router.put("/:id", authorize, TodoController.update);
router.delete("/:id", authorize, TodoController.delete);

module.exports = router;
