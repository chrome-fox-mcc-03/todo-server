const {Todo} = require('../models')
class Controller {
    static add(req, res) {
        Todo.create(req.body)
            .then(function(result) {
                res.status(201).json(result)
            })
            .catch(function(err) {
                res.status(400).json(err)
            })
    }

    static findAll(req, res) {
        Todo.findAll()
            .then(function(result) {
                res.status(200).json(result)
            })
            .catch(function(err) {
                res.status(500).json(err.message)
            })
    }

    static findI(req, res) {
        Todo.findByPk(req.params.id ,{
            returning:true
        })
            .then(function(result) {
                res.status(200).json(result)
            })
            .catch(function(err) {
                res.status(400).json({
                    error: "404 not found"
                })
            })

    }

    static update(req, res) {
        Todo.update({
            Title: req.body.Title,
            Description: req.body.Description,
            Status: req.body.Status,
            Due_Date: req.body.Due_Date
        }, {
            where: {
                id: req.params.id
            },
            returning:true
        })
            .then(function(result) {
                res.status(200).json(result)
            })
            .catch(function(err) {
                res.status(400).json(err)
            })
    }

    static delete(req, res) {
        let data;
        Todo.findByPk(req.params.id)
            .then(function(result) {
                data = result
                return result.destroy()
            })
            .then(function(result1) {
                res.status(200).json(data)
            })
            .catch(function(err) {
                res.status(404).json({
                    error: "Error Not Found"
                })
            })

    }
        
}

module.exports = Controller
