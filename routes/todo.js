const router = require('express').Router();
const TodoController = require('../controllers/TodoController');
const authenticator = require('../middlewares/authenticate');
const authorizator = require('../middlewares/authorize');

//authenticate here
router.use(authenticator);

router.get("/", TodoController.getRoot);
router.get("/:id", TodoController.getRootId);
router.post("/", TodoController.postRoot);

//authorize before delete and update
router.delete("/:id", authorizator, TodoController.deleteRootId);
router.put("/:id", authorizator, TodoController.putRootId);

module.exports = router;