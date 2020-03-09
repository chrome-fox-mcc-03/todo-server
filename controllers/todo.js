const { Todo } = require('../models');
const axios = require('axios')
const countdownmail = axios.create({
    baseURL: "https://countdownmail.com/api",
    headers: {
        Authorization: "MjQwMDE6MzY2NWYxZTRiNWYxYTZk"
    }
})

class TodoController {
    static create(req, res, next) {
        let id;  
        let todo        
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.userId,
            countdown: ""
        })
            .then(result => {
                id = result.id
                todo = result
                const date = `${
                    todo.due_date.getFullYear().toString().padStart(4, '0')}-${
                    (todo.due_date.getMonth()+1).toString().padStart(2, '0')}-${
                    todo.due_date.getDate().toString().padStart(2, '0')} ${
                    todo.due_date.getHours().toString().padStart(2, '0')}:${
                    todo.due_date.getMinutes().toString().padStart(2, '0')}:${
                    todo.due_date.getSeconds().toString().padStart(2, '0')}`

                return countdownmail({
                    method: 'post',
                    url: '/create',
                    data: {  
                        "skin_id": 1,
                        "name": "Countdown Todo",
                        "time_end": date,
                        "time_zone": "Asia\/Jakarta",
                        "font_family": "Roboto-Bold",
                        "color_primary": "FF3A43",
                        "color_text": "FFFFFF",
                        "color_bg": "000000"
                    }
                })
            })
            .then(response => {
                let dataCountdown = response.data.message.src
                todo.countdown = dataCountdown
                return Todo.update({
                    title: todo.title,
                    description: todo.description,
                    status: todo.status,
                    due_date: todo.due_date,
                    countdown: todo.countdown
                }, {
                    where: {
                        id
                    },
                    returning: true
                })
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
        Todo.findAll({
            where: {
                UserId: req.userId
            }
        })
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