const { Todo } = require('../models/index')

class TodoController {
    static create(req, res) {   
             
        Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            next({ error });
        })
    }

    static view(req, res) {
        Todo.findAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next({ error });;
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
            next({ error });
        })
    }

    static updateById(req, res) {
        let { title, description, status, due_date } = req.body;
        let id = req.params.id;
        Todo.update( { title, description, status, due_date }, { where: { id }, returning: true})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next({ error });
        })
    }

    static deleteById(req, res) {
        let id = req.params.id;
        Todo.destroy({
            where : { id }
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next({ error });
        })
    }   
}

module.exports = TodoController;