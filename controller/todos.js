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
        // console.log(req.body)
        Todo.create({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        })
        .then(data=> res.status(201).json(data))
        .catch(err=> {
            if(err.name == 'SequelizeValidationError') res.status(400).json({err})
            else res.status(500).json(err)
        })
    }
    static findOne(req, res){
        Todo.findOne({
            where: {id:req.params.id}
        })
            .then(data=> res.status(200).json(data))
            .catch(err=> res.status(404).json({message : "Not Found"}))
    }
    static update(req, res){
        Todo.findOne({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == null) res.status(404).json({
                    message:"Not Found"
                })
                else return Todo.update({
                    title : req.body.title,
                    description : req.body.description,
                    status : req.body.status,
                    due_date : req.body.due_date
                },{
                    where : {id:req.params.id}
                })
            })
            .then(data=> {
                res.status(200).json(data)
            })
            .catch(err=> {
                console.log(err)
                if (err.name == 'SequelizeValidationError') {
                    res.status(400).json(err)
                }
                else res.status(500)
            })
    }
    static destroy(req, res){
        Todo.destroy({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == 0) res.status(404).json({
                    message:"Not Found"
                })
                else res.status(200).json({message:`Success Delete Data Id = ${req.params.id}`})
            })
            .catch(err=> res.status(500))
    }
}

module.exports = Controller