const { Todo } = require('../models/index')

class TodoController {
    static create(req, res) {
        let input = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.create(input)
            .then(result => {
                res.status(201).json({ msg: 'Todo created.', data: result })
            })
            .catch(err => {
                res.status(500)
            })
    }

    static findAll(req, res) {
        Todo.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500)
            })
    }

    static findOne(req, res) {
        let id = req.params.id
        Todo.findByPk(id)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500)
            })
    }

    static update(req, res) {
        let input = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        let id = req.params.id
        Todo.update(input, { where: { id }, returning: true })
            .then(result => {
                console.log(result)
                res.status(200).json({ msg: 'Todo updated.', data: result })
            })

            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        let id = req.params.id
        Todo.destroy({ where: { id } })
            .then(result => {
                res.status(200).json({ msg: 'Todo deleted.' })
            })

            .catch(err => {
                res.send(err)
            })
    }
}
module.exports = TodoController