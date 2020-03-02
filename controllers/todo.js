const { Todo } = require('../models/index')

class TodoController {
    static findAll(req,res) {
        Todo.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => res.status(500).json(err))
    }

    static create(req, res) {
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        })
            .then(data => {
                res.status(201).json(data)
            })

            .catch(err => res.status(500).json(err))
    }

    static findByPk(req, res) {
        Todo.findByPk(+req.params.id)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json({
                error: `TODO NOT FOUND`
            }))
    }

    static update(req, res) {
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
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json({
                error: 'Error not found'
            }))
    }

    static delete(req, res) {
        Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then((data) => res.status(200).json({
                status: `SUCCESS DELETE TODO`
            }))
            .catch(err => res.status(500).json(err))
    }
}

module.exports = TodoController