const { Todo } = require('../models/index');

class TodoController {
    static create(req, res, next) {   
        // console.log(`masuk`);
        
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
        Todo.findAll({
            where: {
                UserId : req.decoded.id
            }
        })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            
            next({ error });
        })
    }

    static findById(req, res, next) {
        let id = req.params.id;
        
        Todo.findAll({
            where: { 
                id 
            }
        })
        .then(result => {     
            // console.log(result); 
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
        // console.log(`masokkkkkk`);
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
        let deleted;
        Todo.findByPk(id)
        .then(result => {
            if(result) {
                deleted = result;
                return Todo.destroy({
                    where : { id }
                })
            } else {
                next({status: 404, message: {error: `id todo not found`}})
            }
        })
        .then(() => {
            res.status(200).json(deleted)
        })
        .catch(error => {
            next(error);
        })
    }   
}

module.exports = TodoController;