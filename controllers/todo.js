const { Todo } = require('../models');

class Controller {
    static create(req, res) {
        console.log(req.body);
        
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        })
            .then(result => {
                res.status(201).json({
                    Todo: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static findAll(req, res) {
        Todo.findAll()
            .then(result => {
                res.status(200).json({
                    Todo: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static findOne(req, res) {
        const id = req.params.id
        Todo.findOne({
            where: {
                id
            }
        })
            .then(result => {
                res.status(200).json({
                    Todo: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    error: err
                })
            })
    }

    static update(req, res) {
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
                    Todo: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    error: err
                })
            })
    }

    static destroy(req, res) {
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
                        Todo: data
                    })
                })
                .catch(err => {
                    res.status(404).json({
                        error: err
                    })
                })
    }

}

module.exports = Controller