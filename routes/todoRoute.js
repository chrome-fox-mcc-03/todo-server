const todoRoute = require("express").Router()
const TodoController = require("../controllers/TodoController.js")
const authenticator = require("../middlewares/authenticate.js")
const authorizer = require("../middlewares/authorize.js")

todoRoute.use(authenticator)

todoRoute.post("/", TodoController.create)
todoRoute.get("/", TodoController.findAll)


// UPDATE/DELETE MUST BE AUTHORIZED AKA MAY ONLY BE DONE TO ONE'S OWN
todoRoute.get("/:id", authorizer, TodoController.findById)
todoRoute.put("/:id", authorizer, TodoController.update)
todoRoute.delete("/:id", authorizer, TodoController.delete)


module.exports = todoRoute