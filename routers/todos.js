const router = require("express").Router();
const Controller = require("../controllers/Todo");

router.get("/", Controller.findAll);
router.post("/", Controller.create);
router.get("/:id", Controller.findId);
router.put("/:id", Controller.update);
router.delete("/:id", Controller.delete)

module.exports = router;
