const { Todo } = require('../models');
const ErrorModel = require('../helpers/error');
const axios = require('axios');

const zomato = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': 'da38019c1a43c5bea48f0625f3d841e0'
    }
});

class Controller {
    static findAll(req, res, next) {
        const userId = req.decoded.id;
        Todo.findAll({
            where: {
                UserId: userId
            }
        })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(next);
    }

    static create(req, res, next) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        }

        Todo.create(data)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch(err => {
                next(err);
            });
    }

    static findById(req, res, next) {
        let todoId = req.params.id;
        Todo.findByPk(todoId)
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    let error = new ErrorModel(400, "id not found!");
                    throw error;
                }
            })
            .catch(next);
    }

    static put(req, res, next) {
        let todoId = req.params.id;
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.findByPk(todoId)
            .then((result) => {
                if (result) {
                    return Todo.update(data, {
                        where: {
                            id: todoId
                        }
                    });
                } else {
                    let error = new ErrorModel(400, "id not found!");
                    throw error;
                }
            })
            .then((result) => {
                return Todo.findByPk(todoId)
            })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(next);
    }

    static delete(req, res, next) {
        let todoId = req.params.id;
        let deleted;
        Todo.findByPk(todoId)
            .then((result) => {
                if (result) {
                    deleted = result
                    return Todo.destroy({
                        where: {
                            id: todoId
                        }
                    })
                } else {
                    let error = new ErrorModel(400, "id not found!");
                    throw error;
                }
            })
            .then((result) => {
                res.status(200).json(deleted);
            })
            .catch(next);
    }

    static recomend(req, res, next) {
        zomato.get("/cuisines?city_id=74")
        .then((result) => {
            console.log(result.data);
            res.status(200).json(result.data);
        }).catch(next);
    }
}

module.exports = Controller;
