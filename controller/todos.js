const {Todo} = require('../models')

class Controller {
    static findAll(req, res){
        Todo.findAll({
            order: [['id', 'ASC']]
        })
            .then(data=> res.status(200).json(data))
            .catch(err=> res.status(500))
    }
    static create(req, res){
        Todo.create({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        })
        .then(data=> res.status(201).json(data))
        .catch(err=> res.status(500))
    }
    static findOne(req, res){
        Todo.findOne({
            where: {id:req.params.id}
        })
            .then(data=> res.status(200).json(data))
            .catch(err=> res.status(404))
    }
}

module.exports = Controller