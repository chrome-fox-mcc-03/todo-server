const { todo } = require('./../models')

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
            due_date: req.body.due_date
        })
            .then(todo => {
                console.log(todo)
                res.status(201).json(todo)
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
            due_date: req.body.due_date
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
                    res.status(200).json(edited[1])
                }
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