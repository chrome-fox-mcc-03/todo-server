const router = require('express').Router();
const TodoController = require('../controllers/todoController');

router.get("/todos", TodoController.findAll);
router.post("/todos", TodoController.create);
router.get("/todos/:id", TodoController.findById);
router.put("/todos/:id", TodoController.put);
router.delete("/todos/:id", TodoController.delete);

module.exports = router;