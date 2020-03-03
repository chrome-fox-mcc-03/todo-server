const router = require('express').Router();
const TodoController = require('../controllers/todoController');
const authenticator = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authenticator);

router.get("/", TodoController.findAll);
router.post("/", TodoController.create);
router.get("/recomendation", TodoController.recomend);
router.get("/:id", authorization, TodoController.findById);
router.put("/:id", authorization, TodoController.put);
router.delete("/:id", authorization, TodoController.delete);

module.exports = router;