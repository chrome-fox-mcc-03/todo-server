const { Todo } = require('../models/index')

class TodoController {
    static findAll(req,res, next) {
        Todo.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static create(req, res, next) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decode.id
        })
            .then(data => {
                res.status(201).json(data)
            })

            .catch(err => {
                next(err)
            })
    }

    static findByPk(req, res, next) {
        Todo.findByPk(+req.params.id)
            .then(data => {
                if(data) res.status(200).json(data)
                else next({
                    status: 404,
                    message: 'Todo not found'
                })
            })
            .catch(err => res.status(500).json(err))
    }

    static update(req, res, next) {
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id: +req.params.id
            },
            returning: true
        })
            .then(data => {
                if(data) res.status(200).json(data)
                else next({
                    status: 404,
                    message: 'TODO not found'
                })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Todo.findByPk(+req.params.id)
            .then(data => {
                if(data) {
                    res.status(200).json({message: `SUCCESS DELETE TODO`})
                } 
                else next({
                    status: 404,
                    message: 'TODO not found'
                })
            })
            .catch(next)
    }
}

module.exports = TodoController