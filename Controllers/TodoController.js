const { Todo } = require('../models/index.js')

class TodoController {

    static findAll(req, res) {
        Todo.findAll({
            where: {
                UserId: req.decoded.id
            }
        })
            .then(todos => {
                res.status(200).json({todos})
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static findByPk(req, res) {
        let id = +req.params.id

        Todo.findByPk(id)
            .then(todo => {
                if(todo) {
                    res.status(200).json({todo})
                }
                else {
                    next({
                        status: 404,
                        "message": "Todo not found, check your Todo's Id!"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static create(req, res, next) {
        let input = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        }

        Todo.create(input)
            .then(todo => {
                res.status(201).json({todo})
            })
            .catch(err => {
                next(err)
            })
    }

    static destroy(req, res) {
        let id = +req.params.id

        Todo.destroy({where: {id}})
            .then(todo => {
                if(todo) {
                    res.status(200).json({
                        "message": `Successfully delete todo ID: ${id}`
                    })
                }
                else {
                    next({
                        status: 404,
                        "message": "Todo not found, check your Todo's Id!"
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next) {
        let id = +req.params.id
        let input = {
            "title": req.body.title,
            "description": req.body.description,
            "status": req.body.status,
            "due_date": req.body.due_date,
            "updatedAt": new Date()
        }

        Todo.update(input, {where: {id}, returning: true})
            .then(todo => {
                if(todo[0] !== 0) {
                    res.status(200).json({
                        todo,
                        "message": `Successfully update Todo ID: ${id}`
                    })
                }
                else {
                    next({
                        status: 404,
                        "message": "Todo not found, check your Todo's Id!"
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = TodoController