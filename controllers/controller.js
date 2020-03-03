const { ToDo } = require('../models/index.js')
class Controller {
    static read(req, res, next) {
        // console.log('masuk')
        console.log(req.decoded)
        ToDo.findAll({where: {UserId: req.decoded.id}})
            .then(todos => res.status(200).json(todos))
            .catch(err => next(err))
    }
    static create(req, res, next) {
        // res.status(200).json(req.body)
        let newItem = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        }
        ToDo.create(newItem)
            .then(todo => res.status(201).json(todo))
            .catch(err => {
                return next(err)
            })
        // res.status(200).json(newItem)
        // ToDo.create()
    }
    static readId(req, res, next) {
        let id = req.params.id;
        let UserId = req.decoded.id;
        console.log(req.decoded)
        ToDo.findOne({where: {id: id, UserId: UserId}})
            .then(todos => {
                if(todo.UserId !== req.decoded.id) throw {status: 400, customName: 'You do not have access to this item.'}
                else if(todos.length < 1) throw {status: 404, customName: 'Item not found!'}
                else return res.status(200).json(todos)}
                )
            .catch(err => next(err))
    }
    static update(req, res, next) {
        let id = req.params.id;
        // console.log(req.body)
        let updatedItem = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        ToDo.findOne({where: {id: id}})
            .then(todo => {
                if(todo.UserId == req.decoded.id) return ToDo.update(updatedItem, {where: {id: id}})
                else throw {status: 400, customName: 'You do not have access to this item.'}
            })
            .then(todo => {
                if(todo[0] == 0) throw {status: 404, customName: 'Item not found!'}
                else return ToDo.findOne({where: {id: id}})
            })
            .then(todo => {
                return res.status(201).json(todo)
            })
            .catch(err => {
                return next(err)
            })
    }
    static delete(req, res) {
        let id = req.params.id;
        ToDo.findOne({where: {id: id}})
            .then(todo => {
                if(todo.UserId == req.decoded.id) return ToDo.destroy({where: {id: id}})
                else throw {status: 400, customName: 'You do not have access to this item.'}
            })
            .then(todo => {
                if(todo[0] == 0) throw {status: 404, customName: 'Item not found!'}
                else return ToDo.findOne({where: {id: id}})
            })
            .then(todo => {
                return res.status(201).json(todo)
            })
            .catch(err => next(err))
    }
}

module.exports = Controller;