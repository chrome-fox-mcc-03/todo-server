const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

router.get("/", TodoController.getRoot);
router.get("/:id", TodoController.getRootId);
router.post("/", TodoController.postRoot);
router.delete("/:id", TodoController.deleteRootId);
router.put("/:id", TodoController.putRootId);

module.exports = router;