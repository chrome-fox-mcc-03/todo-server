"use strict"

const { Todo } = require('../models/index')

class Controller {
    static findAll(req, res, next){
        Todo.findAll({
            attributes:{
                exclude: ['createdAt', 'updatedAt']
            },
            order: ['id']
        })
        .then(todos => res.status(200).json(todos))
        .catch(err => next(err))
    }

    static create(req, res, next){
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date,
            user_id: req.decoded.id
        })
        .then(newTodo => {
            res.status(201).json(newTodo)
            calendarInsert()
        })
        .catch(err => next(err))
    }

    static findId(req, res, next){
        Todo.findAll({
            where:{
                id:req.params.id
            },
            attributes:{
                exclude: ['createdAt', 'updatedAt']
            }
        })
        .then(todo => {
            if(todo[0]) res.status(200).json(todo)
            else throw new Error('Not found')
        })
        .catch(err => next(err))
    }

    static update(req, res, next){
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
                },
                attributes:{
                    exclude: ['createdAt', 'updatedAt']
                }
            })
        })
        .then(updatedTodo => {
            if(updatedTodo[0]) res.status(200).json(updatedTodo)
            else throw new Error('Not found')
        })
        .catch(err => next(err))
    }

    static delete(req, res, next){
        Todo.findByPk(req.params.id, {
            attributes:{
                exclude: ['createdAt', 'updatedAt']
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
        .then(deletedTodo => {
            if(deletedTodo) res.status(200).json(deletedTodo)
            else throw new Error('Not found')
        })
        .catch(err => next(err))
    }
}

module.exports = Controller