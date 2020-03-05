const { Todo } = require('../models');

class TodoController {
    static create(req, res, next) {        
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.userId
        })
            .then(result => {
                res.status(201).json({
                    data: result
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findAll(req, res, next) {
        Todo.findAll()
            .then(result => {
                res.status(200).json({
                    data: result
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findOne(req, res, next) {
        const id = req.params.id
        Todo.findOne({
            where: {
                id
            }
        })
            .then(result => {
                res.status(200).json({
                    data: result
                })
            })
            .catch(err => {
                next({
                    name: "not found",
                    status: 404,
                    message: "Todo not found"
                })
            })
    }

    static update(req, res, next) {
        const id = req.params.id
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id
            },
            returning: true
        })
            .then(result => {                
                res.status(200).json({
                    data: result
                })
            })
            .catch(err => {
                next({
                    name: "not found",
                    status: 404,
                    message: "data not found"
                })
            })
    }

    static destroy(req, res, next) {
        const id = req.params.id
        let data;
        Todo.findOne({
            where: {
                id
            }
        })
                .then(result => {
                    data = result
                    return Todo.destroy({
                        where: {
                            id
                        }
                    })
                })
                .then(result => {
                    res.status(200).json({
                        data: data
                    })
                })
                .catch(err => {
                    next({
                        name: "not found",
                        status: 404,
                        message: "data not found"
                    })
                })
    }

}

module.exports = TodoController