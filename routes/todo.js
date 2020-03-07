const router = require('express').Router();
const TodoController = require('../controllers/TodoController');
const authenticator = require('../middlewares/authenticate');
const authorizator = require('../middlewares/authorize');

router.use(authenticator);

router.get("/", TodoController.findAllTodo);
router.get("/:id", TodoController.findOneTodo);

router.post("/", TodoController.createNewTodo);

router.delete("/:id", authorizator, TodoController.deleteTodo);
router.put("/:id", authorizator, TodoController.updateTodo);

module.exports = router;