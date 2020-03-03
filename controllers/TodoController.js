const { Todo } = require('../models/index')

class TodoController {
    static create(req, res, next) {
        let input = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,

        }
        input.UserId = req.currentUserId

        Todo.create(input)
            .then(result => {
                res.status(201).json({ msg: 'Todo created.', data: result })
            })
            .catch(err => {
                next(err)
            })
    }

    static findAll(req, res, next) {
        let UserId = req.currentUserId
        Todo.findAll({ where: { UserId } })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static findOne(req, res, next) {
        let id = req.params.id
        Todo.findByPk(id)
            .then(result => {
                if (result) {
                    res.status(200).json(result)
                } else {
                    next({ name: '404NotFound' })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next) {
        let input = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        let id = req.params.id
        Todo.findByPk(id).then(todo => {
            if (todo) {
                Todo.update(input, { where: { id }, returning: true })
                    .then(result => {

                        res.status(200).json({ msg: 'Todo updated.', data: result[1][0] })
                    })
                    .catch(err => {
                        next(err)
                    })
            } else {
                next({ name: '404NotFound' })
            }
        })

    }

    static delete(req, res, next) {
        let id = req.params.id
        Todo.findByPk(id)
            .then(result => {
                if (result) {
                    let data = result
                    Todo.destroy({ where: { id } })
                        .then(result => {
                            res.status(200).json({ msg: 'Todo deleted.', data })
                        })
                        .catch(err => {
                            next(err)
                        })
                } else {
                    next({ name: '404NotFound' })
                }

            }).catch(err => {
                next(err)
            })
    }
}
module.exports = TodoController