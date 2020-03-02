const {Todo} = require('../models/index')

class ControllerTodo {
    static create (req, res) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        })
            .then(todo => res.status(201).json(todo))
            .catch(err => res.status(500).json(err))
    }

    static findAll(req, res) {
        Todo.findAll({
            order: [['id', 'ASC']]
        })
            .then(todos => res.status(200).json(todos))
            .catch(err => res.status(500).json(err))
    }

    static findByPk(req, res) {
        let findId = req.params.id
        Todo.findByPk(findId)
            .then(todo => {
                if(!todo) {
                    throw todo
                } else {
                    res.status(200).json(todo)
                }
            })
            .catch(err => res.status(404).json({
                error: "Not Found"
            }))
    }

    static update(req, res) {
        let updateId = req.params.id
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id: updateId
            },
            returning: true
        })
            .then(todo => {
                res.status(200).json(todo[1][0])
            })
            .catch(err => res.status(500).json(err))
    }

    static deleteTodo(req, res) {
        let deleteId = req.params.id
        let deletedTodo
        Todo.findByPk(deleteId)
            .then(todo => {
                deletedTodo = todo
                return Todo.destroy({
                    where: {
                        id: deleteId
                    }
                })
            })
            .then(deleted => {
                res.status(200).json(deletedTodo)
            })
            .catch(err => res.status(500).json(err))
    }
}

module.exports = ControllerTodo