const { Todo } = require('../models')


class TodoController{
    static showAllTodo(req, res){
        Todo.findAll()
            .then(results => {
                res.status(200).json(
                    results
                )
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static createTodo(req, res){
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        })
        .then(result => {
            // console.log(req.body.due_date);
            
            res.status(201).json({
                data: result
            })
        })
        .catch(err => {
            let errorMessage = err.errors[0].message
            res.status(500).send(errorMessage)
        })
    }

    static getTodoById(req, res){
        Todo.findByPk(req.params.id)
        .then(result => {
            res.status(200).json({
                data: result
            })
        })
        .catch(err => {
            res.status(404).json({err})
        })
    }

    static updateTodoById(req, res){
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        },{
            where: {
                id:req.params.id
            }
        })
        .then(result => {
            return Todo.findByPk(req.params.id)
        })
        .then(result => {
            res.status(200).json({
                data: result
            })
        })
        .catch(err => {
            res.status(404).json({err})
        })
    }

    static deleteTodoById(req, res){
        
        Todo.findByPk(req.params.id)
            .then(result => {
                let deletedRecord = result

                Todo.destroy({
                    where:{
                        id : req.params.id
                    }
                })

                return deletedRecord
            })
            .then(deletedData => {
                res.status(200).json({
                    data: deletedData
                })
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }
}


module.exports = TodoController