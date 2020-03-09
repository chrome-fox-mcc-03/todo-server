const { Todo } = require('../models');
const { User } = require('../models');
const ErrorModel = require('../helpers/error');
const axios = require('axios');
const sendEmail = require('../helpers/nodemailer');
const quoteApi = require('../helpers/quotesAPI');

const zomato = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': 'da38019c1a43c5bea48f0625f3d841e0'
    }
});

class Controller {
    static findAll(req, res, next) {
        const userId = req.decoded.id;
        let data;
        let response;
        Todo.findAll({
            where: {
                UserId: userId
            },
            order: [
                ['status', 'DESC'],
                ['due_date', 'ASC']
            ]
        })
            .then((result) => {
                data = result;
                return quoteApi();
            })
            .then((result) => {
                result = result.data.map(el => {
                    return el.content.rendered
                })
                let quotesNum = result.length;
                let ran = Math.floor(Math.random() * quotesNum);
                response = {
                    data,
                    quotes: [result[ran]]
                }
                res.status(200).json(response);
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }

    static create(req, res, next) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        }
        let finalResult;
        Todo.create(data)
            .then((result) => {
                finalResult = result;
                return User.findByPk(req.decoded.id)
            })
            .then((result) => {
                try {
                    sendEmail(result.email, finalResult.title);
                    res.status(201).json({ data: finalResult })
                } catch (error) {
                    throw new ErrorModel(500, "Error sending mail");
                }
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
                    res.status(200).json({ data: result });
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
            id: todoId,
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
                res.status(200).json({ data: result });
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
                res.status(200).json({ data: deleted });
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
