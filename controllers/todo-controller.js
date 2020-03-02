const { Todo } = require('../models/index')

class TodoController {
    static createTodo(req, res) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        })
            .then((todo) => {
                res.status(201).json(todo)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static findAll(req, res) {
        Todo.findAll()
            .then((todos) => {
                res.status(200).json(todos)
            })
            .catch(() => {
                res.status(500)
            })
    }

    static findOne(req, res) {
        Todo.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((todo) => {
                res.status(200).json(todo)
            })
            .catch(() => {
                res.status(500)
            })
    }

    static update(req, res) {
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id: req.params.id
            },
            returning: true,
            plain: true
        })
            .then((updatedTodo) => {
                res.status(200).json(updatedTodo[1])
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        let todoId = req.params.id
        let deletedTodo;
        Todo.findByPk(todoId)
            .then((todo) => {
                deletedTodo = todo;
                // console.log(deletedTodo);
                return Todo.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then((deleted) => {
                console.log(deletedTodo)
                res.status(200).json(deletedTodo)
            })
            .catch(() => {
                res.status(500)
            })
    }
}

module.exports = TodoController;