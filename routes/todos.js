const router = require("express").Router();
const authenticator = require("../middlewares/authentification");
const authorizer = require("../middlewares/authorization");
const { TodoController } = require("../controllers");

router.use(authenticator);
router.post("/", TodoController.create);
router.get("/", TodoController.findAll);
router.get("/:id", authorizer, TodoController.findId);
router.put("/:id", authorizer, TodoController.update);
router.delete("/:id", authorizer, TodoController.delete);

module.exports = router;
