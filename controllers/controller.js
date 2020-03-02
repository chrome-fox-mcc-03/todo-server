const { todo } = require('./../models')

class Controller{
    static getTodos(req,res) {
        todo.findAll()
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500)
            })
    }
    static addTodo(req,res) {
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
                console.log(err);
                
                res.status(400).json(err)
            })
    }
    static getTodoById(req,res) {
        let id = Number(req.params.id)
        todo.findByPk(id)
            .then(todo => {
                if (todo) {
                    res.status(200).json(todo)
                } else {
                    throw ({error: `error`, message: "Id not found"})
                }
            })
            .catch(err => {
                console.log(err)
                res.status(404).json(err)
                
            })
    }
    static updateTodo(req,res) {
        let id = Number(req.params.id)
        todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        },{
            where: {
                id
            }
        })
            .then(edited => {
                todo.findByPk(id)
                    .then(todoWithId => {
                        if (todoWithId) {
                            res.status(200).json(todoWithId)
                        } else {
                            throw ({error: `error`, message: "Id not found"})
                        }
                    })
                    .catch(err => {
                        res.status(404).json(err)
                    })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static deleteTodo(req,res) {
        let id = Number(req.params.id)
        todo.findByPk(id)
            .then(todoDeleted => {
                if(!todoDeleted) {
                    throw ({error: `error`, message: "Id not found"})
                } else {
                    todo.destroy({
                        where: {
                            id
                        }
                    })
                        .then(deleted => {
                            res.status(200).json(todoDeleted)
                        })
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
}

module.exports = Controller