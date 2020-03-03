const { todo } = require('./../models')
const axios = require('axios').default;


class Controller{
    static getTodos(req,res, next) {
        todo.findAll({
            where: {
                userId: req.decoded.id
            }
        })
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                next(err)
            })
    }
    static addTodo(req,res, next) {
        todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            userId: req.decoded.id
        })
            .then(todo => {
                const sendEmail = axios.create({
                    baseURL: 'https://todosapp-1a8b.restdb.io',
                    headers: {"x-apikey": '2699edc589ecd4a75c21f30a24930277eb5d2'}     
                });
                let status
                if (req.body.status) {
                    status = req.body.status
                } else {
                    status = false
                }
                sendEmail.post('/mail', {
                    "to": req.decoded.email,
                    "subject": "Your new to do!", 
                    "html": `
                    <h2>New To Do: </h2>
                    <h3>Title: ${req.body.title} </h3>
                    <h3>Description: ${req.body.description} </h3>
                    <h3>Status: ${status} </h3>
                    <h3>Due Date: ${req.body.due_date} </h3>
                    `, 
                    "company": "TodosApp Inc", 
                    "sendername": "TodosApp customer support"
                })
                return todo
            })
            .then(function (response) {
                res.status(201).json(response)
            })
            
            .catch(err => {
                next(err)
            })
    }
    static getTodoById(req,res,next) {
        let id = Number(req.params.id)
        todo.findByPk(id)
            .then(todo => {
                if (todo) {
                    res.status(200).json(todo)
                } else {
                    throw ({name:"noIdFound" ,errors: [{message: "Id not found"}]})
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static updateTodo(req,res,next) {
        let id = Number(req.params.id)
        todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            userId: req.decoded.id
        },{
            where: {
                id
            },
            returning: true
        })
            .then(edited => {
                if (edited[1].length === 0) {
                    throw ({name:"noIdFound" ,errors: [{message: "Id not found"}]})
                } else {
                    const sendEmail = axios.create({
                        baseURL: 'https://todosapp-1a8b.restdb.io',
                        headers: {"x-apikey": '2699edc589ecd4a75c21f30a24930277eb5d2'}     
                    });
                    let status
                    if (req.body.status) {
                        status = req.body.status
                    } else {
                        status = false
                    }
                    sendEmail.post('/mail', {
                        "to": req.decoded.email,
                        "subject": "Your updated to do!", 
                        "html": `
                        <h2>New To Do: </h2>
                        <h3>Title: ${req.body.title} </h3>
                        <h3>Description: ${req.body.description} </h3>
                        <h3>Status: ${status} </h3>
                        <h3>Due Date: ${req.body.due_date} </h3>
                        `, 
                        "company": "TodosApp Inc", 
                        "sendername": "TodosApp customer support"
                    })
                    let data = edited[1]
                    return data
                }
            })
            .then(function (response) {
                res.status(200).json(response)
            })
            .catch(err => {
                next(err)
            })
    }
    static deleteTodo(req,res,next) {
        let id = Number(req.params.id)
        let container
        todo.findByPk(id)
            .then(todoDeleted => {
                if(!todoDeleted) {
                    throw ({name:"noIdFound" ,errors: [{message: "Id not found"}]})
                } else {
                    todo.destroy({
                        where: {
                            id
                        }
                    })
                    container = todoDeleted
                }
            })
            
            .then(deleted => {
                res.status(200).json(container)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = Controller