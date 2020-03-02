const todoRoute = require("express").Router()
const TodoController = require("../controllers/TodoController.js")

todoRoute.post("/", TodoController.create)
todoRoute.get("/", TodoController.findAll)
todoRoute.get("/:id", TodoController.findById)
todoRoute.put("/:id", TodoController.update)
todoRoute.delete("/:id", TodoController.delete)


module.exports = todoRoute