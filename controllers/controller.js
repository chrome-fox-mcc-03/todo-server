const { ToDo } = require('../models/index.js')
class Controller {
    static read(req, res) {
        // console.log('masuk')
        console.log(req.decoded)
        ToDo.findAll()
            .then(todos => res.status(200).json(todos))
            .catch(err => res.status(500).json(err))
    }
    static create(req, res) {
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
                if(err.name === 'SequelizeValidationError') return res.status(400).json(err)
                else return res.status(500).json(err)
            })
        // res.status(200).json(newItem)
        // ToDo.create()
    }
    static readId(req, res) {
        let id = req.params.id;
        ToDo.findAll({where: {id: id}})
            .then(todos => {
                if(todos.length < 1) return res.status(404).json({error: 'Not Found!'})
                else return res.status(200).json(todos)}
                )
            .catch(err => res.status(500).json(err))
    }
    static update(req, res) {
        let id = req.params.id;
        // console.log(req.body)
        let updatedItem = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        ToDo.update(updatedItem, {where: {id: id}})
            .then(todo => {
                if(todo[0] == 0) return res.status(404).json({error: 'Not found!'})
                else return ToDo.findAll({where: {id: id}})
            })
            .then(todo => {
                return res.status(201).json(todo)
            })
            .catch(err => {
                if(err.name === 'SequelizeValidationError') return res.status(400).json(err)
                else return res.status(500).json(err)
            })
    }
    static delete(req, res) {
        let id = req.params.id;
        ToDo.destroy({where: {id: id}})
            .then(todo => {
                if(todo == 0) return res.status(404).json({error: 'Not found!'})
                else return res.status(200).json(todo)
            })
            .catch(err => res.status(500).json(err))
    }
}

module.exports = Controller;