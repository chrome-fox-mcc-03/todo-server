const router = require('express').Router();
const TodoController = require('../controllers/TodoController');
const authenticator = require('../middlewares/authenticate');
const authorizator = require('../middlewares/authorize');

//authenticate here
router.use(authenticator);

//my chosen api: public holiday, show any national holiday between today until due date
// /todos
router.get("/", TodoController.findAllTodo);
router.get("/:id", TodoController.findOneTodo);

router.post("/", TodoController.createNewTodo);

//authorize before delete and update
router.delete("/:id", authorizator, TodoController.deleteTodo);
router.put("/:id", authorizator, TodoController.updateTodo);

module.exports = router;