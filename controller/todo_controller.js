const { Todo } = require('../models/index')

class todoController {
    static create(req, res) {
        console.log(`1`);
        
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(400).json(error);
        })
    }

    static view(req, res) {
        Todo.findAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(400);
        })
    }

    static findById(req, res) {
        let id = req.params.id;
        Todo.findAll({
            where: { id }
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(400)
        })
    }

    static updateById(req, res) {
        let { title, description, status, due_date } = req.body;
        let id = req.params.id;
        Todo.update( { title, description, status, due_date }, { where: { id }, returning: true})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(400)
        })
    }

    static deleteById(req, res) {
        let id = req.params.id;
        Todo.destroy({
            where : { id }
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(400)
        })
    }   
}

module.exports = todoController;