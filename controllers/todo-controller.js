const { Todo } = require('../models/index')

class TodoController {
    static createTodo(req, res, next) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        })
            .then(todo => {
                res.status(201).json(todo)
            })
            .catch(err => {
                next(err)
            })
    }

    static findAll(req, res, next) {
        Todo.findAll({
            where: {
                UserId: req.decoded.id
            },
            order: [['due_date']]
        })
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                next(err)
            })
    }

    static findOne(req, res, next) {
        Todo.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(todo => {
                if (todo) {
                    res.status(200).json(todo)
                } else {
                    next({
                        status: 404,
                        message: { error: 'Todo not found' }
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next) {
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
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        let todoId = req.params.id
        let deletedTodo;
        Todo.findByPk(todoId)
            .then(todo => {
                if (todo) {
                    deletedTodo = todo;
                    return Todo.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                } else {
                    next({
                        status: 404,
                        message: { error: 'Todo not found' }
                    })
                }
            })
            .then((deleted) => {
                res.status(200).json(deletedTodo)
            })
            .catch(err => {
                next(err)
            })
    }

    static markDone(req, res, next) {
        Todo.update({
            status: true
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
            .catch(err => {
                next(err)
            })
    }

    static markUndone(req, res, next) {
        Todo.update({
            status: false
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
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TodoController;