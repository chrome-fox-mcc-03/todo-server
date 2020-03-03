const { Todo } = require('../models/index')

class TodoController {
    static create(req, res, next) {   
             
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
            next(error);
        })
    }

    static view(req, res, next) {
        Todo.findAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            next(error);;
        })
    }

    static findById(req, res, next) {
        let id = req.params.id;
        Todo.findAll({
            where: { id }
        })
        .then(result => {            
            if(result.length > 0) {
                res.status(200).json(result);
            } else {
                next({status: 404, message: {error: `id todo not found`}})
            }
        })
        .catch(error => {
            next(error);
        })
    }

    static updateById(req, res, next) {
        let { title, description, status, due_date } = req.body;
        let id = req.params.id;
        Todo.update( { title, description, status, due_date }, { where: { id }, returning: true})
        .then(result => {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                next({status:404, message: {error:`id todo not found`}})
            }
        })
        .catch(error => {
            next(error);
        })
    }

    static deleteById(req, res, next) {
        let id = req.params.id;
        Todo.destroy({
            where : { id }
        })
        .then(result => {
            if(result.length > 0) {
                res.status(200).json(result);
            } else {
                next({status: 404, message: {error: `id todo not found`}})
            }
        })
        .catch(error => {
            next(error);
        })
    }   
}

module.exports = TodoController;