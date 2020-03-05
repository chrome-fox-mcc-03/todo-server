const { todo } = require('./../models')
const axios = require('axios').default;

const sendEmail = axios.create({
    baseURL: 'https://todosapp-1a8b.restdb.io',
    headers: {"x-apikey": process.env.APIKEY_RESTDB}     
});

class Controller{
    static getTodos(req,res, next) {
        // console.log(req.decoded.id)
        todo.findAll({
            where: {
                userId: req.decoded.id
            },
            order: [['due_date', 'ASC']]
        })
            .then(todos => {

                res.status(200).json(todos)
            })
            .catch(err => {

                next(err)
            })
    }
    static addTodo(req,res, next) {
        let status
        if (req.body.status) {
            status = req.body.status
        } else {
            status = false
        }
        todo.create({
            title: req.body.title,
            description: req.body.description,
            status: status,
            due_date: req.body.due_date,
            userId: req.decoded.id
        })
            .then(todo => {
                
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
        let status
        if (req.body.status) {
            status = req.body.status
        } else {
            throw ({name:"SequelizeValidationError" ,errors: [{message: "Status must be filled"}]})
        }
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
                    // let status
                    console.log(req.body.status)
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
                    console.log(data)
                    return data
                }
            })
            .then(function (response) {
                res.status(200).json(response)
            })
            .catch(err => {
                console.log(err)
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