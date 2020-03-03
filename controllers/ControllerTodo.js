const {Todo} = require('../models/index')

class ControllerTodo {
    static create (req, res, next) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        })
            .then(todo => res.status(201).json(todo))
            .catch(err => {
                if (err.errors) {
                    let errors = []
                    err.errors.forEach(element => {
                        errors.push(element.message)
                    });
                    next({
                        status: 400,
                        message: {
                            errors: errors
                        }
                    })
                } else {
                    next(err)
                }
            })
    }

    static findAll(req, res, next) {
        Todo.findAll({
            order: [['id', 'ASC']]
        })
            .then(todos => res.status(200).json(todos))
            .catch(err => next(err))
    }

    static findByPk(req, res, next) {
        let findId = req.params.id
        Todo.findByPk(findId)
            .then(todo => {
                if(!todo) {
                    next({
                        status: 404,
                        message: {
                            error: 'Todo not found'
                        }
                    })
                } else {
                    res.status(200).json(todo)
                }
            })
            .catch(err => next(err))
    }

    static update(req, res, next) {
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
                if (todo[1].length == 0) {
                    next({
                        status: 404,
                        message: {
                            error: 'Todo not found'
                        }
                    })
                } else {
                    res.status(200).json(todo[1][0])
                }
            })
            .catch(err => {
                if (err.errors) {
                    let errors = []
                    err.errors.forEach(element => {
                        errors.push(element.message)
                    });
                    next({
                        status: 400,
                        message: {
                            errors: errors
                        }
                    })
                } else {
                    next(err)
                }
            })
    }

    static deleteTodo(req, res, next) {
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
                if(deleted != 0) {
                    res.status(200).json(deletedTodo)
                } else {
                    next({
                        status: 404,
                        message: {
                            error: 'Todo not found'
                        }
                    })
                }
            })
            .catch(err => next(err))
    }
}

module.exports = ControllerTodo