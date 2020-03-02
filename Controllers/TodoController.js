const { Todo } = require('../models/index.js')

class TodoController {

    static findAll(req, res) {
        Todo.findAll()
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
                    res.status(404).json({
                        "message": "Todo not found, check your Id!"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static create(req, res) {
        let input = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }

        Todo.create(input)
            .then(todo => {
                res.status(201).json({todo})
            })
            .catch(err => {
                if(err.errors[0].type === "notNull Violation") {
                    let error = err.errors[0].message
                    res.status(400).json({error})
                }
                else if(err.errors[0].message === "Cannot backdate, check your input date!") {
                    let error = err.errors[0].message
                    res.status(400).json({error})
                }
                else {
                    res.status(500).json({err})
                }
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
                    res.status(404).json({
                        "message": "Todo not found, check your Id!"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static update(req, res) {
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
                    res.status(404).json({
                        "message": "Todo not found, check your Id!"
                    })
                }
            })
            .catch(err => {
                if(err.errors[0].type === "notNull Violation") {
                    let error = err.errors[0].message
                    res.status(400).json({error})
                }
                else if(err.errors[0].message === "Cannot backdate, check your input date!") {
                    let error = err.errors[0].message
                    res.status(400).json({error})
                }
                else {
                    res.status(500).json({err})
                }
            })
    }

}

module.exports = TodoController