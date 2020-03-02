"use strict"

const { Todo } = require('../models/index')

class Controller {
    static findAll(req, res){
        Todo.findAll()
        .then(todos => res.status(200).json(todos))
        .catch(err => res.status(500).json(err))
    }

    static create(req, res){
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date
        })
        .then(newTodo => res.status(201).json(newTodo))
        .catch(err => res.status(500).json(err))
    }

    static findId(req, res){
        Todo.findAll({
            where:{
                id:req.params.id
            }
        })
        .then(todo => res.status(200).json(todo))
        .catch(err => res.status(500).json(err))
    }

    static update(req, res){
        Todo.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        },{
            where:{
                id: req.params.id
            }
        })
        .then(result => {
            return Todo.findAll({
                where:{
                    id:req.params.id
                }
            })
        })
        .then(updatedTodo => res.status(200).json(updatedTodo))
        .catch(err => res.status(500).json(err))
    }

    static delete(req, res){
        Todo.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(deletedTodo => {
            Todo.destroy({
                where: {
                    id: req.params.id
                }
            })
            return deletedTodo
        })
        .then(deletedTodo => res.status(200).json(deletedTodo))
        .catch(err => res.status(500).json(err))
    }
}

module.exports = Controller